from django.shortcuts import render
from models import Login,Data
from django.http import HttpResponse
# Create your views here.
import json
def json_response(func):
    """
    A decorator thats takes a view response and turns it
    into json. If a callback is added through GET or POST
    the response is JSONP.
    """
    def decorator(request, *args, **kwargs):
        objects = func(request, *args, **kwargs)
        if isinstance(objects, HttpResponse):
            return objects
        try:
            data = json.dumps(objects)
            if 'callback' in request.REQUEST:
                # a jsonp response!
                data = '%s(%s);' % (request.REQUEST['callback'], data)
                return HttpResponse(data, "text/javascript")
        except:
            data = simplejson.dumps(str(objects))
        return HttpResponse(data, "application/json")
    return decorator
@json_response
def getNotifs(request):
    key = request.GET['key']
    notifs = Data.objects.filter(key__exact=key)
    notifs = notifs[:10]
    newcount = 0
    response = ""
    resp = {}
    notarr = []
    for notif in notifs:
        if notif.flag==True:
           newcount=newcount+1
           notif.flag=False
           notif.save()
        notarr.append(notif.text)
    resp["count"]=newcount
    resp["notifarr"]=notarr
    return resp

        
@json_response
def test(request):
    key = request.GET['data']
    data = ["hi","llele"]
   
#    data = json.dumps(data)
    print data
    return data


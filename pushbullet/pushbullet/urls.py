from django.conf.urls import patterns, include, url
from bulllet import views
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pushbullet.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^test/', 'bulllet.views.test'),
    url(r'^getnotifs/', 'bulllet.views.getNotifs'),


)

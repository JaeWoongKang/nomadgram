from django.conf.urls import url
from . import views


app_name = "images"
urlpatterns = [
    url(
        regex = r'^$',
        view = views.Feed.as_view(),
        name = 'feed'
    ),
        url(
        regex = r'^(?P<image_id>\w+)/$',
        view = views.ImageDetail.as_view(),
        name='detail_image'
    ),
    url(
        regex = r'^(?P<image_id>\w+)/likes/$',
        view = views.LikeImage.as_view(),
        name='like_image'
    ),
    url(
        regex = r'^(?P<image_id>\w+)/unlikes/$',
        view = views.LikeImage.as_view(),
        name='unlike_image'
    ),
    url(
        regex = r'^(?P<image_id>\w+)/comments/$',
        view = views.CommentOnImage.as_view(),
        name='comment_image'
    ),
    url(
        regex = r'^(?P<image_id>\w+)/comments/(?P<comment_id>[0-9]+)/$',
        view = views.ModerateComments.as_view(),
        name='comment_image'
    ),
    url(
        regex = r'comments/(?P<comment_id>[0-9]+)/$',
        view = views.Comment.as_view(),
        name='comment'
    ),
        url(
        regex = r'^search/$',
        view = views.Search.as_view(),
        name='search'
    )

]
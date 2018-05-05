from django.db import models
from nomad_coders.users import models as user_models
from nomad_coders.images import models as images_models



class Notification(images_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like','Like'),
        ('comment','Comment'),
        ('follow','Follow')
    )

    creator = models.ForeignKey(user_models.User, related_name = 'creator',on_delete=models.PROTECT)
    to = models.ForeignKey(user_models.User, related_name = 'to',on_delete=models.PROTECT)
    notification_type = models.CharField(max_length = 20, choices = TYPE_CHOICES)
    image = models.ForeignKey(images_models.Image,on_delete=models.PROTECT, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    

    class Meta:
        ordering = ['-created_at']

    
    def  __str__(self):
        return 'From : {}-  To : {}'.format(self.creator, self.to)
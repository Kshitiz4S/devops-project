from django.db import models

class Art(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='art_imgs/')
    description = models.TextField()

    def __str__(self):
        return self.name
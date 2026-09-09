from django.db import models

class Banner(models.Model):
    title=models.CharField(max_length=200,null=True)
    image=models.ImageField(upload_to='banner_imgs/')

    def __str__(self):
        return f'{self.title}'
from django.db import models

# makemigrations - create changes and store in a file 
# migrate - apply the pending changes created by makemigrations

# Create your models here.
class Contact(models.Model):
    event = models.CharField(max_length=122)
    data = models.CharField(max_length=122)
    time = models.CharField(max_length=122)
    location = models.CharField(max_length=122)
    img = models.CharField(max_length=122)
    date = models.DateField()

    def __str__(self):
        return self.name
    
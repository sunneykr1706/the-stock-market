from django.shortcuts import render, HttpResponse
from datetime import datetime
from home.models import Contact
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
        "variable1":"Harry is great",
        "variable2":"Rohan is great"
    } 
    return render(request, 'index.html', context)
    # return HttpResponse("this is homepage")

def about(request):
    return render(request, 'about.html') 

def services(request):
    return render(request, 'services.html')
 

def contact(request):
    if request.method == "POST":
        event= request.POST.get('event')
        data = request.POST.get('data')
        time= request.POST.get('time')
        location= request.POST.get('location')
        img = request.POST.get('img')
       
        contact = Contact(event=event, data=data, time=time, location=location, img=img,date = datetime.today())
        contact.save()
        messages.success(request, 'Your message has been sent!')
    return render(request, 'contact.html')
 
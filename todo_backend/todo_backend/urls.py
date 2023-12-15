"""
URL configuration for todo_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from todos.views import TodoCreateView, TodoListView, TodoUpdateView, TodoDeleteView, RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/todo/create/', TodoCreateView.as_view(), name='todo-create'),
    path('api-auth/', include('rest_framework.urls')),  # Django authentication endpoints
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # Token authentication

    path('api/todos/', TodoListView.as_view(), name='todo-list'),
    path('api/todo/<int:pk>/update/', TodoUpdateView.as_view(), name='todo-update'),
    path('api/todo/<int:pk>/delete/', TodoDeleteView.as_view(), name='todo-delete'),
    path('api/register-user/', RegisterView.as_view(), name='register-user'),
]

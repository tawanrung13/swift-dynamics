# Generated by Django 3.0.7 on 2020-06-30 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_remove_list_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='list',
            name='date_modified',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='list',
            name='date_add',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
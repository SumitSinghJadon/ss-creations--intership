# Generated by Django 5.0.6 on 2024-06-13 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ApplyLeave',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Employ_name', models.CharField(max_length=50)),
                ('Title', models.CharField(max_length=50)),
                ('discription', models.CharField(max_length=50)),
                ('date', models.DateField(auto_now=True)),
            ],
        ),
    ]

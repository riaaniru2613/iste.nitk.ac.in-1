# Generated by Django 3.0.7 on 2021-04-30 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ctf', '0004_auto_20210430_0155'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='answer',
            field=models.CharField(default=200, max_length=100),
            preserve_default=False,
        ),
    ]

# Generated by Django 3.0.7 on 2021-05-02 11:28

from django.db import migrations, models
import website.helperFunctions


class Migration(migrations.Migration):

    dependencies = [
        ('sig', '0001_initial'),
        ('project', '0009_auto_20210207_0700'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='img_url',
        ),
        migrations.RemoveField(
            model_name='project',
            name='isFeatured',
        ),
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, default=website.helperFunctions.default_project_image_path, upload_to=website.helperFunctions.project_poster_upload_path),
        ),
        migrations.AlterField(
            model_name='project',
            name='sigs',
            field=models.ManyToManyField(to='sig.SIG'),
        ),
    ]

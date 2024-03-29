# Generated by Django 3.0.7 on 2021-05-02 11:28

from django.db import migrations, models
import website.helperFunctions


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SIG',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Crypt', 'CRYPT'), ('Charge', 'CHARGE'), ('Credit', 'CREDIT'), ('Chronicle', 'CHRONICLE'), ('Clutch', 'CLUTCH'), ('Concrete', 'CONCRETE'), ('Create', 'CREATE'), ('Catalyst', 'CATALYST'), ('All Club', 'ALL CLUB')], max_length=9)),
                ('avatar', models.ImageField(blank=True, default=website.helperFunctions.default_sig_poster_path, upload_to=website.helperFunctions.sig_avatar_upload_path)),
                ('summary', models.TextField(default='SIG Summary')),
                ('description', models.TextField()),
                ('reg_url', models.URLField(default='')),
                ('website_talk_url', models.TextField(default='')),
            ],
        ),
    ]

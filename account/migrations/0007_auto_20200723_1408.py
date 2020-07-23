# Generated by Django 3.0.7 on 2020-07-23 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_sig_reg_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='core',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AddField(
            model_name='core',
            name='linkedin_url',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]

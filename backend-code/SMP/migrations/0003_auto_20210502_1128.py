# Generated by Django 3.0.7 on 2021-05-02 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sig', '0001_initial'),
        ('SMP', '0002_auto_20210414_0631'),
    ]

    operations = [
        migrations.AlterField(
            model_name='smp',
            name='sigs',
            field=models.ManyToManyField(to='sig.SIG'),
        ),
    ]
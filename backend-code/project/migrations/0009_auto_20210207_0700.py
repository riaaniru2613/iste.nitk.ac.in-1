# Generated by Django 3.0.7 on 2021-02-07 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0008_auto_20200723_1128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='year',
            field=models.IntegerField(choices=[(2018, 2018), (2019, 2019), (2020, 2020), (2021, 2021)], default=2021),
        ),
    ]

# Generated by Django 5.0.3 on 2024-04-15 07:48

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0007_alter_comment_voter_alter_post_voter'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='voter',
            field=models.ManyToManyField(blank=True, default=0, related_name='answer_voter', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='post',
            name='voter',
            field=models.ManyToManyField(blank=True, default=0, related_name='post_voter', to=settings.AUTH_USER_MODEL),
        ),
    ]

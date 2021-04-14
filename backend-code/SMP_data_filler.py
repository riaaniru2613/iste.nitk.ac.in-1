import xlsxwriter
import xlrd
from django.core.files.images import ImageFile
from account.models import SIG
from SMP.models import SMP
import importlib
import os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()


def excel_read(file, sheet_name='Sheet1'):
    book = xlrd.open_workbook(file)
    sheet = book.sheet_by_name(sheet_name)
    data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)]
            for r in range(sheet.nrows)]
    return data


def excel_write(dataset, file, worksheet_name="Usernames"):
    workbook = xlsxwriter.Workbook(file)
    worksheet = workbook.add_worksheet(worksheet_name)
    n = 1
    for data in dataset:
        c = 'A'
        for x in data:
            cell = c+str(n)
            worksheet.write(cell, x)
            c = chr(ord(c)+1)
        n += 1
    workbook.close()


l = excel_read('SMP.xlsx', 'Sheet1')[1:]
for row in l:
    name = row[0].strip()
    sigs = row[1].strip().split(',')
    l = []
    for sigin sigs:
        l.append(SIG.objects.get(name=sig))
    sigs = l
    summary = row[2].strip()
    file_url = row[3].strip()
    img_url = row[4].strip()
    softwares = row[5].strip()
    obj = SMP.objects.create(
            name=name,
            sigs=sigs,
            summary=summary,
            file_url=file_url,
            img_url=img_url,
            softwares=softwares
        )
    obj.save()
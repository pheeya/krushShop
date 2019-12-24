from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir(".") if isfile(join(".", f))]
import os

for f in onlyfiles:
	os.system('cwebp -q 80 ' + f + ' -o ' + f.split(".")[0] + '.webp')



cd /home/user/Documents/git
filename="templatesv3_$(date -u +%Y%m%dT%H%M%SZ)"
zip -r $filename.zip templatesv3 -x "*/node_modules/*"
#aws s3 cp $filename.zip s3://files983/git
rm $filename.zip



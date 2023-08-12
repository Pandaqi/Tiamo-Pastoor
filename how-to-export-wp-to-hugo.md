=== EXPORTING WORDPRESS WEBSITE TO HUGO ===

This article really helped me: https://ma.ttias.be/step-by-step-guide-migrating-wordpress-to-hugo/

* Install the plugin (download GitHub zip, install that directly in WP Plugins section)
* Login to your website via SSH: `ssh u4302d8117@web0089.zxcs.nl -p 7685` with password `Dalionzo7!`
* Go to the `plugins` WordPress folder.
* Type command: `php hugo-export-cli.php /tmp/`
* Wait until done
* Open a _new_ command window and type: `scp -P 7685 u4302d8117@web0089.zxcs.nl:/tmp/wp-hugo.zip C:\Users\Tiamo\Desktop\`
* Wait until the zip file is downloaded
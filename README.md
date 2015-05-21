# Save_Gradle
To overcome painful gradle sync for android devs
First time it will download Gradle from gradle default repository

You Can serve your local gradle server with others under same network.

But need to have  Node
For Ubuntu/Debian/Mint
1.sudo apt-get install nodejs-legacy
2.npm(Node package Manager)
  'sudo apt-get install npm'

For RHEL/Fedora/CentOs from EPEL Repository
1.sudo yum install nodejs
2.npm(Node package Manager)
  'yum install npm'

Then run 'npm install '

After That

Run in terminal with 'node index.js'

then You will see the "distributionURL=xxxxx"
then go to gradle wrapper.properties file under gradle folder of your android studio project
then comment default url   with "#"  and paste the text as seen in terminal.

Then Sync project again.

Cheers!



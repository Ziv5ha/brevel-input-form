	--- HOW TO SET UP ---

In order to configure the app first enter the right login info to .env.
currently it should look like this:
DATABASE_URL=localhost  =>DB host. localhost if DB runs on local machine. host URL if runs remotely.
PORT=5432               =>port to access DB. postgreSQLs default is 5432
USER='postgres'         =>autorized username
PASSWORD='postgres'     =>password
DATABASE=			=>speficy database

CONNECTION_STRING=	=>Optional. if you prefer using a connection string you can
				  example: postgres://user:password@host:5432/database

You only need to set this up once unless you change your postgreSQL server.

	---  HOW TO USE   --- 

Once your .env is configured correctly simply launch START.exe.
It should open a server terminal window and a web page in your browser.
* keep the server terminal open. *

To close the program simply close the server terminal window.

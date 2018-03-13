<!DOCTYPE html>
<html ng-app="kontakuto" ng-controller="contacts_controller">
    <head>
        <!-- meta -->
        <meta charset="utf-8">
        <meta name="description" content="Exercicis Javascript" />
        <meta name="author" content="Oscar Garcia" />
        <meta name="contacts" content="contacts">
        
        <title>Kontakuto</title>

        <!-- css -->
        <link rel="stylesheet" href="css/style.css" type="text/css">
        
        <!-- JQuery  -->
        <script type="text/javascript" src="lib/jquery-1.11.3.min.js"></script>

        <!-- AngularJS -->
        <script type="text/javascript" src="lib/angular.min.js"></script>

        <!-- Javascript-->
        <script type="text/javascript" src="lib/javascript.js"></script>

        <!-- favicon -->
        <link href="img/favicon.ico" rel="icon" type="image/x-icon" />
    </head>
	<body>
		<header>
            <h1>Kontakuto</h1>
            <div>
                <span>username</span>
                <button>*</button>
            </div>
        </header>
		<nav>
            <ul>
                <li><a href="add_contact.html"><button>+</button></a></li>
            </ul>
        </nav>
		<section ng-modle="list_of_contacts">
			<article ng-repeat="contact in contacts">
                <div class="contact_buttons">
                    <a href=""><button>e</button></a><button ng-click="delete($index)">d</button>
                </div>
                <div ng-click="show_details($index)">{{$index + 1}} {{contact.contact_name}}</div>
                <div class="contact_details">
                    <hr>
                    Phone: {{contact.num_phone1}}<br>
                    Email: {{contact.email1}}<br>
                    <input type="button" value="x" ng-click="hide_details($index)">
                    {{$index + 1}}
                </div>
            </article>
		</section>
		<footer></footer>
	</body>
</html>

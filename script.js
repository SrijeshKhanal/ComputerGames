const PRODUCTS = [
		{id: 1, name: 'Call Of Duty', price: 21, pname: 'COD', gType: 'Action',  description: 'Call of Duty is a first-person shooter video game based on id Tech 3. Call of Duty sees you taking on some of the most secretive missions at the height of the Cold War.', imagePath: 'images/callofduty.jpg'},
		{id: 2, name: 'Boxing', price: 41, pname: 'Boxing', gType: 'Sports', description: 'The best overall boxing game on PC, offering realistic gameplay and licensed boxers', imagePath: 'images/boxing.jpg'},
		{id: 3, name: 'Cricket', price: 18, pname: 'Cricket', gType: 'Sports', description: 'Cricket, latest cricket game with differt version. Experience the real cricket in your PC.', imagePath: 'images/cricket.jpg'},
		{id: 4, name: 'Soccer', price: 25, pname: 'Soccer', gType: 'Sports', description: 'Football, latest football game with differt version. Experience the real football in your PC.', imagePath: 'images/football.jpg'},
		{id: 5, name: 'GTA', price: 38, pname: 'GTA', gType: 'Action', description: 'Grand Theft Auto is a series of action-adventure games created by David Jones and Mike Dailly. The game starts you off with the tutorial mission, Prologue, which introduces you to the main characters, Michael De Santa and Trevor Philips.', imagePath: 'images/gta.jpg'},
		{id: 6, name: 'Mario', price: 6, pname: 'Mario', gType: 'Others', description: 'The Mario games are set primarily in the fictional Mushroom Kingdom, typically with Mario as the player character. He is usually joined by his brother, Luigi, and often by other members of the Mario cast. As platform games, they involve the player character running and jumping across platforms and atop enemies in themed levels. The games have simple plots, typically with Mario and Luigi rescuing the kidnapped Princess Peach from the primary antagonist, Bowser.', imagePath: 'images/mario.jpg'},
		{id: 7, name: 'Need For Speed', price: 16, pname: 'NFS', gType: 'Others', description: 'Need for Speed is a racing game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illegal street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.', imagePath: 'images/Needforspeed.jpg'},
		{id: 8, name: 'Wrestling', price: 17, pname: 'Wrestling', gType: 'Sports', description: 'Create the best wrestler and train him to become world champion on one of the best wrestling games.', imagePath: 'images/wrestling.jpg'},
		{id: 9, name: 'Hit Man', price: 28, pname: 'HitMan', gType: 'Action', description: 'Hitman is a stealth video game franchise created by IO Interactive. In each installment, players assume the role of a cloned contract killer named Agent 47, who travels around the world to assassinate various targets that are assigned to him by the fictional International Contract Agency.', imagePath: 'images/hitmanaction.jpg'},
		{id: 10, name: 'Mortal Kombat', price: 29, pname: 'Mortal', gType: 'Action', description: 'Mortal Kombat is a media franchise centered on a series of fighting video games originally developed by Midway Games in 1992. The original Mortal Kombat arcade game spawned a franchise consisting of action-adventure games, a comic book series, a card game, films, an animated TV series, and a live-action tour.', imagePath: 'images/mortal.jpg'},
		{id: 11, name: 'Cyber Punk', price: 6, pname: 'CP', gType: 'Action', description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt, based on video game designer Mike Pondsmith game series.', imagePath: 'images/cyberpinkaction.jpg'},
		{id: 12, name: 'NBA', price: 27, pname: 'Basketball', gType: 'Sports', description: 'NBA puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends. Live out your own pro journey in MyCAREER and experience your personal rise to the NBA. Flex your management skills as a powerful Executive in MyGM and MyLEAGUE. Anyone, anywhere can hoop in NBA.', imagePath: 'images/nba.jpg'},
		{id: 13, name: 'Splash Art', price: 29, pname: 'Splash Art', gType: 'Kids', description: 'The Best Mr Bean Games. Grab your Teddy, pull on your best grey suit, and get ready to laugh with Mr. Bean! The hapless hero is going on adventures where you can enjoy with him.', imagePath: 'images/splashart.jpg'},
		{id: 14, name: 'Spiderman', price: 34, pname: 'Spiderman', gType: 'Others', description: 'Marvel Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.', imagePath: 'images/spiderman.jpg'},
		{id: 15, name: 'Golf', price: 56, pname: 'Golf', gType: 'Sports', description: 'World Golf Tour is the most realistic golf game, loved by more than 15 million players across the globe.', imagePath: 'images/golf.jpg'},
		{id: 16, name: 'Football', price: 76, pname: 'Rugby', gType: 'Sports', description: 'Take control of the biggest clubs and top rugby nations, and enter the most prestigious competitions in single-player and multiplayer modes, local and online. Rugby  offers total rugby, combining tactics and intensity through gameplay that stays true to the sport', imagePath: 'images/rugby.jpg'},
		{id: 17, name: 'CTR', price: 40, pname: 'CTR', gType: 'Kids', description: 'Crash Team Racing Nitro-Fueled is a 2019 kart racing game.', imagePath: 'images/ctr.jpg'},
		{id: 18, name: 'Mine Craft', price: 2, pname: 'Mine Craft', gType: 'Kids', description: 'Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs.', imagePath: 'images/minecraft.jpg'},
		{id: 19, name: 'Bike Race', price: 9, pname: 'Bike Racing', gType: 'Others', description: '2 player split-screen mode. Compete in various modes like Supercross, nationals, open cross, way point and more. Master insane stunts and test your limits in freestyle mode. Turn your private compound into a show room for the all of your customized vehiclesUpgrade and tune your vehicles with original performance parts', imagePath: 'images/bikerace.jpg'},
		{id: 20, name: 'Dead Space', price: 87, pname: 'DS', gType: 'Action', description: 'Dead Space is a science fiction/horror franchise created and directed by Glen Schofield. Dead Space was developed by Visceral Games and published and owned by Electronic Arts.', imagePath: 'images/deadspace.jpg'},
		{id: 21, name: 'Brain', price: 87, pname: 'Brain Game', gType: 'Others', description: 'The collection of best cognitive games for all age groups..', imagePath: 'images/brainkids.jpg'},
		{id: 22, name: 'Archer', price: 87, pname: 'Archer', gType: 'Others', description: 'Defenders Of The Realm: An Epic War ! Archery World Tour game cover. Archery World Tour.', imagePath: 'images/archer.jpg'},
		{id: 23, name: 'Robocop', price: 87, pname: 'Robocop', gType: 'Action', description: 'Armed with your trusty Auto-9, factory-built strength, years of experience on the force and a variety of tools at your disposal, you will fight forces seeking to destroy the city you call home in an all new first-person, explosive hunt for the truth.', imagePath: 'images/robocop.jpg'}
	];
	
	const smallImgForId1 = [
		{id: 101, name: 'Call Of Duty', price: 21, pname: 'COD', gType: 'Action', imagePath: 'images/callofduty.jpg'},
		{id: 102, name: 'Call Of Duty Version 2', price: 21, pname: 'COD', gType: 'Action', imagePath: 'images/callofdutyversion2.jpg'},
		{id: 103, name: 'Call Of Duty Version 3', price: 21, pname: 'COD', gType: 'Action', imagePath: 'images/callofduty3.jpg'},
		{id: 104, name: 'Call Of Duty Modern', price: 21, pname: 'COD', gType: 'Action', imagePath: 'images/callOfDutyModernLatest.jpg'}
	];
		
	const smallImgForId2 = [
		{id: 201, name: 'Boxing', price: 41, pname: 'Boxing', gType: 'Sports', imagePath: 'images/boxing.jpg'},
		{id: 202, name: 'Boxing Version 2', price: 41, pname: 'Boxing', gType: 'Sports', imagePath: 'images/boxing2.jpg'},
		{id: 203, name: 'Boxing Version 3', price: 41, pname: 'Boxing', gType: 'Sports', imagePath: 'images/boxing3.jpg'},
		{id: 204, name: 'Boxing Latest', price: 41, pname: 'Boxing', gType: 'Sports', imagePath: 'images/boxingl.jpg'}
	];
	
	const smallImgForId3 = [
		{id: 301, name: 'Cricket', price: 18, pname: 'Cricket', gType: 'Sports', imagePath: 'images/cricket.jpg'},
		{id: 302, name: 'Cricket Version 2', price: 18, pname: 'Cricket', gType: 'Action', imagePath: 'images/cricket2.jpg'},
		{id: 303, name: 'Cricket Version 3', price: 18, pname: 'Cricket', gType: 'Others', imagePath: 'images/cricket3.jpg'},
		{id: 304, name: 'Cricket Latest', price: 18, pname: 'Cricket', gType: 'Sports', imagePath: 'images/cricketl.jpg'}
	];
	
	const smallImgForId4 = [
		{id: 401, name: 'Soccer', price: 25, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'},
		{id: 402, name: 'Soccer Version 2', price: 25, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football2.jpg'},
		{id: 403, name: 'Soccer Version 3', price: 25, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football3.jpg'},
		{id: 404, name: 'Soccer Latest', price: 25, pname: 'Soccer', gType: 'Sports', imagePath: 'images/footballl.jpg'}
	];
	
	const smallImgForId5 = [
		{id: 501, name: 'GTA', price: 38, pname: 'GTA', gType: 'Action', imagePath: 'images/gta.jpg'},
		{id: 502, name: 'GTA Version 2', price: 38, pname: 'GTA', gType: 'Action', imagePath: 'images/gta2.jpg'},
		{id: 503, name: 'GTA Version 3', price: 38, pname: 'GTA', gType: 'Action', imagePath: 'images/gta3.jpg'},
		{id: 504, name: 'GTA Latest', price: 38, pname: 'GTA', gType: 'Action', imagePath: 'images/gtal.jpg'}
	];
	
	const smallImgForId6 = [
		{id: 601, name: 'Mario', price: 6, pname: 'Mario', gType: 'Others', imagePath: 'images/mario.jpg'},
		{id: 602, name: 'Mario Version 2', price: 6, pname: 'Mario', gType: 'Others', imagePath: 'images/mario2.jpg'},
		{id: 603, name: 'Mario Version 3', price: 6, pname: 'Mario', gType: 'Others', imagePath: 'images/mario3.jpg'},
		{id: 604, name: 'Mario Latest', price: 6, pname: 'Mario', gType: 'Others', imagePath: 'images/mariol.jpg'}
	];
	
	const smallImgForId7= [
		{id: 701, name: 'Need For Speed', price: 16, pname: 'NFS', gType: 'Others', imagePath: 'images/Needforspeed.jpg'},
		{id: 702, name: 'Need For Speed Version 2', price: 16, pname: 'NFS', gType: 'Others', imagePath: 'images/Needforspeed2.jpg'},
		{id: 703, name: 'Need For Speed Version 3', price: 16, pname: 'NFS', gType: 'Others', imagePath: 'images/Needforspeed3.jpg'},
		{id: 704, name: 'Need For Speed Latest', price: 16, pname: 'NFS', gType: 'Others', imagePath: 'images/Needforspeedl.jpg'}
	];
	
	const smallImgForId8 = [
		{id: 801, name: 'Wrestling', price: 15, pname: 'Wrestling', gType: 'Sports', imagePath: 'images/wrestling.jpg'},
		{id: 802, name: 'Wrestling Version 2', price: 15, pname: 'Wrestling', gType: 'Sports', imagePath: 'images/wrestling2.jpg'},
		{id: 803, name: 'Wrestling Version 3', price: 15, pname: 'Wrestling', gType: 'Sports', imagePath: 'images/wrestling3.jpg'},
		{id: 804, name: 'Wrestling Latest', price: 15, pname: 'Wrestling', gType: 'Sports', imagePath: 'images/wrestlingl.jpg'}
	];
	
	const smallImgForId9 = [
		{id: 901, name: 'HitMan', price: 21, pname: 'HitMan', gType: 'Action', imagePath: 'images/hitmanaction.jpg'},
		{id: 902, name: 'HitMan Version 2', price: 21, pname: 'HitMan', gType: 'Action', imagePath: 'images/hitmanaction2.jpg'},
		{id: 903, name: 'HitMan Version 3', price: 21, pname: 'HitMan', gType: 'Action', imagePath: 'images/hitmanaction3.jpg'},
		{id: 904, name: 'HitMan Modern', price: 21, pname: 'HitMan', gType: 'Action', imagePath: 'images/hitmanactionl.jpg'}
	];
		
	const smallImgForId10 = [
		{id: 1001, name: 'Mortal Kombat', price: 41, pname: 'Mortal', gType: 'Action', imagePath: 'images/mortal.jpg'},
		{id: 1002, name: 'Mortal Kombat Version 2', price: 41, pname: 'Mortal', gType: 'Action', imagePath: 'images/mortal2.jpg'},
		{id: 1003, name: 'Mortal Kombat Version 3', price: 41, pname: 'Mortal', gType: 'Action', imagePath: 'images/mortal3.jpg'},
		{id: 1004, name: 'Mortal Kombat Latest', price: 41, pname: 'Mortal', gType: 'Action', imagePath: 'images/mortall.jpg'}
	];
	
	const smallImgForId11 = [
		{id: 2001, name: 'Cyber Punk', price: 18, pname: 'CP', gType: 'Action', imagePath: 'images/cyberpinkaction.jpg'},
		{id: 2002, name: 'Cyber Punk Version 2', price: 18, pname: 'CP', gType: 'Action', imagePath: 'images/cyberpinkaction2.jpg'},
		{id: 2003, name: 'Cyber Punk Version 3', price: 18, pname: 'CP', gType: 'Action', imagePath: 'images/cyberpinkaction3.jpg'},
		{id: 2004, name: 'Cyber Punk Latest', price: 18, pname: 'CP', gType: 'Action', imagePath: 'images/cyberpinkactionl.jpg'}
	];
	
	const smallImgForId12 = [
		{id: 3001, name: 'NBA', price: 25, pname: 'Basketball', gType: 'Sports', imagePath: 'images/nba.jpg'},
		{id: 3002, name: 'NBA Version 2', price: 25, pname: 'Basketball', gType: 'Sports', imagePath: 'images/nba2.jpg'},
		{id: 3003, name: 'NBA Version 3', price: 25, pname: 'Basketball', gType: 'Sports', imagePath: 'images/nba3.jpg'},
		{id: 3004, name: 'NBA Latest', price: 25, pname: 'Basketball', gType: 'Sports', imagePath: 'images/nbal.jpg'}
	];
	
	const smallImgForId13 = [
		{id: 4001, name: 'Splash Art', price: 38, pname: 'Splash Art', gType: 'Kids', imagePath: 'images/splashart.jpg'},
		{id: 4002, name: 'Splash Art Version 2', price: 38, pname: 'Splash Art', gType: 'Kids', imagePath: 'images/splashart2.jpg'},
		{id: 4003, name: 'Splash Art Version 3', price: 38, pname: 'Splash Art', gType: 'Kids', imagePath: 'images/splashart3.jpg'},
		{id: 4004, name: 'Splash Art Latest', price: 38, pname: 'Splash Art', gType: 'Kids', imagePath: 'images/splashartl.jpg'}
	];
	
	const smallImgForId14 = [
		{id: 5001, name: 'Spiderman', price: 6, pname: 'Spiderman', gType: 'Others', imagePath: 'images/spiderman.jpg'},
		{id: 5002, name: 'Spiderman Version 2', price: 6, pname: 'Spiderman', gType: 'Others', imagePath: 'images/spiderman2.jpg'},
		{id: 5003, name: 'Spiderman Version 3', price: 6, pname: 'Spiderman', gType: 'Others', imagePath: 'images/spiderman3.jpg'},
		{id: 5004, name: 'Spiderman Latest', price: 6, pname: 'Spiderman', gType: 'Others', imagePath: 'images/spidermanl.jpg'}
	];
	
	const smallImgForId15 = [
		{id: 6001, name: 'Golf', price: 16, pname: 'Golf', gType: 'Sports', imagePath: 'images/golf.jpg'},
		{id: 6002, name: 'Golf Version 2', price: 16, pname: 'Golf', gType: 'Sports', imagePath: 'images/golf2.jpg'},
		{id: 6003, name: 'Golf Version 3', price: 16, pname: 'Golf', gType: 'Sports', imagePath: 'images/golf3.jpg'},
		{id: 6004, name: 'Golf Latest', price: 16, pname: 'Golf', gType: 'Sports', imagePath: 'images/golfl.jpg'}
	];
	
	const smallImgForId16 = [
		{id: 7001, name: 'Football', price: 15, pname: 'Rugby', gType: 'Sports', imagePath: 'images/rugby.jpg'},
		{id: 7002, name: 'Football Version 2', price: 15, pname: 'Rugby', gType: 'Sports', imagePath: 'images/rugby2.jpg'},
		{id: 7003, name: 'Football Version 3', price: 15, pname: 'Rugby', gType: 'Sports', imagePath: 'images/rugby3.jpg'},
		{id: 7004, name: 'Football Latest', price: 15, pname: 'Rugby', gType: 'Sports', imagePath: 'images/rugbyl.jpg'}
	];
	
	const smallImgForId17 = [
		{id: 8001, name: 'CTR', price: 6, pname: 'CTR', gType: 'Kids', imagePath: 'images/ctr.jpg'},
		{id: 8002, name: 'CTR Version 2', price: 6, pname: 'CTR', gType: 'Kids', imagePath: 'images/ctr2.jpg'},
		{id: 8003, name: 'CTR Version 3', price: 6, pname: 'CTR', gType: 'Kids', imagePath: 'images/ctr3.jpg'},
		{id: 8004, name: 'CTR Latest', price: 6, pname: 'CTR', gType: 'Kids', imagePath: 'images/ctrl.jpg'}
	];
	
	const smallImgForId18 = [
		{id: 9001, name: 'Mine Craft', price: 16, pname: 'Mine Craft', gType: 'Kids', imagePath: 'images/minecraft.jpg'},
		{id: 9002, name: 'Mine Craft Version 2', price: 16, pname: 'Mine Craft', gType: 'Kids', imagePath: 'images/minecraft2.jpg'},
		{id: 9003, name: 'Mine Craft Version 3', price: 16, pname: 'Mine Craft', gType: 'Kids', imagePath: 'images/minecraft3.jpg'},
		{id: 9004, name: 'Mine Craft Latest', price: 16, pname: 'Mine Craft', gType: 'Kids', imagePath: 'images/minecraftl.jpg'}
	];
	
	const smallImgForId19 = [
		{id: 1101, name: 'Bike Race', price: 15, pname: 'Bike Racing', gType: 'Others', imagePath: 'images/bikerace.jpg'},
		{id: 1102, name: 'Bike Race Version 2', price: 15, pname: 'Bike Racing', gType: 'Others', imagePath: 'images/bikerace2.jpg'},
		{id: 1103, name: 'Bike Race Version 3', price: 15, pname: 'Bike Racing', gType: 'Others', imagePath: 'images/bikerace3.jpg'},
		{id: 1104, name: 'Bike Race Latest', price: 15, pname: 'Bike Racing', gType: 'Others', imagePath: 'images/bikeracel.jpg'}
	];
	
	const smallImgForId20 = [
		{id: 2201, name: 'Dead Space', price: 16, pname: 'DS', gType: 'Others', imagePath: 'images/deadspace.jpg'},
		{id: 2202, name: 'Dead Space Version 2', price: 16, pname: 'DS', gType: 'Others', imagePath: 'images/deadspace2.jpg'},
		{id: 2203, name: 'Dead Space Version 3', price: 16, pname: 'DS', gType: 'Others', imagePath: 'images/deadspace3.jpg'},
		{id: 2204, name: 'Dead Space Latest', price: 16, pname: 'DS', gType: 'Others', imagePath: 'images/deadspacel.jpg'}
	];
	
	const smallImgForId21 = [
		{id: 3301, name: 'Brain', price: 15, pname: 'Brain Game', gType: 'Others', imagePath: 'images/brainkids.jpg'},
		{id: 3302, name: 'Brain Version 2', price: 15, pname: 'Brain Game', gType: 'Others', imagePath: 'images/chess.jpg'},
		{id: 3303, name: 'Brain Version 3', price: 15, pname: 'Brain Game', gType: 'Others', imagePath: 'images/brainkids3.jpg'},
		{id: 3304, name: 'Brain Latest', price: 15, pname: 'Brain Game ', gType: 'Others', imagePath: 'images/brainkidsl.jpg'}
	];
	
	const smallImgForId22 = [
		{id: 4401, name: 'Archer', price: 16, pname: 'Archer', gType: 'Others', imagePath: 'images/archer.jpg'},
		{id: 4402, name: 'Archer Version 2', price: 16, pname: 'Archer', gType: 'Others', imagePath: 'images/archer2.jpg'},
		{id: 4403, name: 'Archer Version 3', price: 16, pname: 'Archer', gType: 'Others', imagePath: 'images/archer3.jpg'},
		{id: 4404, name: 'Archer Latest', price: 16, pname: 'Archer', gType: 'Others', imagePath: 'images/archerl.jpg'}
	];
	
	const smallImgForId23 = [
		{id: 5501, name: 'Robocop', price: 16, pname: 'Robocop', gType: 'Action', imagePath: 'images/robocop.jpg'},
		{id: 5502, name: 'Robocop Version 2', price: 16, pname: 'Robocop', gType: 'Action', imagePath: 'images/robocop2.jpg'},
		{id: 5503, name: 'Robocop Version 3', price: 16, pname: 'Robocop', gType: 'Action', imagePath: 'images/robocop3.jpg'},
		{id: 5504, name: 'Robocop Latest', price: 16, pname: 'Robocop', gType: 'Action', imagePath: 'images/robocopl.jpg'}
	];

const itemsPerPage = 8;
let currentPage = 1;
const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage);	
	
$(document).ready(function () {
    const cart = [];
	
    function renderProducts(products) {
		$('#productsContainer').html(''); // Clear previous products
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const currentProducts = products.slice(startIndex, endIndex);

        for (let i = 0; i < currentProducts.length; i++) {
            const product = currentProducts[i];

            const productCard = $('<div class="col-3 product-card"></div>');

            productCard.html(`
                <div class="pro">
                    <img src="${product.imagePath}" class="img-design" onclick="viewProductDetails(${product.id})"/>
                    <div class="descrip" onclick="viewProductDetails(${product.id})">
                        <h3>${product.name}</h3>
                        <div class="product-desc">${product.pname} ${product.gType}</div>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="pro-price">${product.price} CAD</div>
                    </div>
                   <!-- ToDo Implement this in future href="#" class="add-to-cart" data-index="${i}"><i class="fas fa-shopping-cart cart"></i></a> -->
                </div>
            `);
            $('#productsContainer').append(productCard);
        }
	
		renderPagination();	
    }

	//pagination
	function renderPagination() {
		const paginationContainer = $('#pagination');
		paginationContainer.html('');

		for (let i = 1; i <= totalPages; i++) {
			const link = $('<a href="#" class="pagination-link"></a>');
			link.text(i);
			if (i === currentPage) {
				link.addClass('active');
			}
			link.click((function (pageNumber) {
				return function () {
					currentPage = pageNumber;
					fetchDataAndDisplay();
				};
			})(i));
			paginationContainer.append(link);
		}
    }
	
	

	
	// Initial rendering of products on page load
    renderProducts(PRODUCTS);
	renderPagination();
	
    $(function () {
		// Clear Filter
        $('#clear').click(function () {
            // Clear filters
            $('.gtype').prop('checked', false);
            $('#pname').val('');
            $('#fromPrice').val('');
            $('#toPrice').val('');
            $('#searchInput').val('');
            renderProducts(PRODUCTS);
        });

        $('#filter').click(function () {
            // Filter logic here
            const selectedTypeElements = $('.gtype:checked');
            const selectedTypes = [];
            for (let i = 0; i < selectedTypeElements.length; i++) {
                selectedTypes.push(selectedTypeElements[i].value);
            }

            const pname = $('#pname').val();
            const fromPrice = parseFloat($('#fromPrice').val());
            const toPrice = parseFloat($('#toPrice').val());

            let filteredProducts = PRODUCTS;

            if (selectedTypes.length > 0) {
                filteredProducts = filteredProducts.filter(product => selectedTypes.includes(product.gType));
            }

            if (pname) {
                filteredProducts = filteredProducts.filter(product => product.pname === pname);
            }

            if (!isNaN(fromPrice)) {
                filteredProducts = filteredProducts.filter(product => product.price >= fromPrice);
            }

            if (!isNaN(toPrice)) {
                filteredProducts = filteredProducts.filter(product => product.price <= toPrice);
            }
            renderProducts(filteredProducts);
        });

        $('#searchButton').click(function () {
            const searchTerm = $('#searchInput').val().toLowerCase();
            const searchResults = PRODUCTS.filter(product => product.name.toLowerCase().includes(searchTerm));
            renderProducts(searchResults);
        });
		
    });
	
	// Event listeners for pagination buttons
	$('#pagination').on('click', '.pagination-link', function () {
		console.log('Pagination link clicked. Current page before:', currentPage);
		currentPage = parseInt($(this).text(), 10);
		fetchDataAndDisplay();
	});
	// fetchDataAndDisplay to fetch the correct products based on the current page
	function fetchDataAndDisplay() {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const currentProducts = PRODUCTS.slice(startIndex, endIndex);
		renderProducts(PRODUCTS);
	}

    /* Sorting */
    $('#select').change(function () {
        sortProducts();
    });

    function sortProducts() {
        const selectedSort = $('#select').val();

        switch (selectedSort) {
            case 'nameAsc':
                sortByNameAsc();
                break;
            case 'nameDesc':
                sortByNameDesc();
                break;
            case 'priceAsc':
                sortByPriceAsc();
                break;
            case 'priceDesc':
                sortByPriceDesc();
                break;
            default:
                 renderProducts(PRODUCTS);
                break;
        }
    }

    // Name Ascending Sorting
    function sortByNameAsc() {
        PRODUCTS.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return nameA.localeCompare(nameB);
        });
        renderProducts(PRODUCTS);
    }

    // Name Descending Sorting
    function sortByNameDesc() {
        PRODUCTS.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return nameB.localeCompare(nameA);
        });
        renderProducts(PRODUCTS);
    }

    // Price Ascending Sorting
    function sortByPriceAsc() {
        PRODUCTS.sort(function (a, b) {
            return a.price - b.price;
        });
        renderProducts(PRODUCTS);
    }

    // Price Descending Sorting
    function sortByPriceDesc() {
        PRODUCTS.sort(function (a, b) {
            return b.price - a.price;
        });
        renderProducts(PRODUCTS);
    }
	
	// Calling this function to initially render cart items on page load
    renderCartItems();
    
});

// viewProductDetails to ensure the correct number of small images are displayed
function viewProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const smallImages = getSmallImagesForProduct(productId);

    if (product && smallImages) {
        // Store the selected product and small images in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        localStorage.setItem('smallImages', JSON.stringify(smallImages));
        // Navigate to the product details page
        window.location.href = 'productdetails.html?productId=' + productId;
    } else {
        console.error('Product details not found');
    }
}

// Function to retrieve the selected product from localStorage
function getSelectedProduct() {
    const selectedProduct = localStorage.getItem('selectedProduct');
    return selectedProduct ? JSON.parse(selectedProduct) : null;
}


// Function to retrieve small images based on the product ID
function getSmallImagesForProduct(productId) {
    switch (productId) {
        case 1:
            return smallImgForId1;
        case 2:
            return smallImgForId2;
		case 3:
            return smallImgForId3;
        case 4:
            return smallImgForId4;
		case 5:
            return smallImgForId5;
		case 6:
            return smallImgForId6;
		case 7:
            return smallImgForId7;
		case 8:
            return smallImgForId8;
		case 9:
            return smallImgForId9;
		case 10:
            return smallImgForId10;
		case 11:
            return smallImgForId11;
        case 12:
            return smallImgForId12;
		case 13:
            return smallImgForId13;
        case 14:
            return smallImgForId14;
		case 15:
            return smallImgForId15;
		case 16:
            return smallImgForId16;
		case 17:
            return smallImgForId17;
		case 18:
            return smallImgForId18;
		case 19:
            return smallImgForId19;
		case 20:
            return smallImgForId20;
		case 21:
            return smallImgForId21;
		case 22:
            return smallImgForId22;
		case 23:
            return smallImgForId23;
		
        default:
            return null;
    }
}


// Block for cart-related functions

function showAlertButton() {
    const continueToCartContainer = $('#continueToCartContainer');
    const continueToCartBtn = $('<button class="continue-to-cart-btn" onclick="continueToCart()">Continue to Cart</button>');

    // Added"Continue to Cart" button to the container
    continueToCartContainer.html(continueToCartBtn);

    // Show the container
    continueToCartContainer.show();
}

function continueToCart() {
    // Navigate to the cart page
    window.location.href = 'cart.html';
}

function renderCartItems() {
    const cartContainer = $('#cartItemsContainer');
    cartContainer.html('');

    cart.forEach((item) => {
        const row = `
            <tr>
                <td><a href="#" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></a></td>
                <td><img src="${item.imagePath}" alt="${item.name}"></td>
                <td><h5>${item.name}</h5></td>
                <td><h5>${item.price} CAD</h5></td>
                <td><input class="w-25 pl-1" value="${item.quantity}" type="number" onchange="updateCartItemQuantity(${item.id}, this.value)"></td>
                <td><h5>${item.price * item.quantity} CAD</h5></td>
            </tr>
        `;
        cartContainer.append(row);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCartItems();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity, 10);
        renderCartItems();
    }
}

// Block for checkout confirmation
$('.proceed-btn').click(function () {
    const confirmed = confirm('Are you sure to checkout?');
    if (confirmed) {
        // Navigate to the shipment page
        window.location.href = 'shipment.html';
        // Clear the cart 
        clearCart();
    }
});

function clearCart() {
    cart = [];
    renderCartItems();
}


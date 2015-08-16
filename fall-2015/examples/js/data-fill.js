var person = {
	'raphael': {
			'name': 'Raphael',
			'biography': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
			'picture': 'http://cp91279.biography.com/Raphael_The-Renaissance_HD_768x432-16x9.jpg'
		},
	'michaelangelo': {
			'name': 'Michaelangelo',
			'biography': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore <a href="http://black.mitplw.com">magnam aliquam quaerat voluptatem</a>. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
			'picture': 'http://a4.files.biography.com/image/upload/c_fill,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxNzIzNjIxOTAx.jpg'
		},

		'donatello': {
			'name': 'Donatello',
			'biography': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
			'picture': 'http://www.wga.hu/art/d/donatell/2_mature/various/1uzzano.jpg'
		},
		'leonardo': {
			'name': 'Leonardo',
			'biography': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
			'picture': 'http://institute4learning.com/blog/wp-content/uploads/2013/02/Leonardo-da-Vinci.jpg'
		},
		'dali': {
			'name': 'Salvador Dali',
			'biography': 'Pot break it down dolor sit amizzle, shizzlin dizzle adipiscing shut the shizzle up. Nullizzle ass velizzle, uhuh ... yih! break yo neck, yall, suscipizzle quis, gravida vizzle, pot. Pellentesque get down get down mammasay mammasa mamma oo sa. Sizzle erizzle. Mah nizzle ma nizzle dolor ass turpis check it out brizzle.',
			'picture': 'http://www.greynotgrey.com/blog/wp-content/uploads/2014/04/salvador-dali2.jpg'
		}


	};
/* old
function fillInfo(ID){
	imageURL = person[ID].picture; 
	$('#about-pic').css( 'background-image', 'url(' + imageURL + ')' );
	$('#about-information').html( '<h2>'+ person[ID].name +'</h2>' );
	$('#about-information').append( person[ID].biography );
};
*/
function fillInfo(ID){
	imageURL = person[ID].picture; 
	$('#about-pic').css( 'background-image', 'url(' + imageURL + ')' );
	$('#about-pic').css( 'background-position', 'center' );
	$('#about-pic').css( 'background-size', 'cover' );
	$('#about-information').html( '<h2>' + person[ID].name + '</h2>' + person[ID].biography );
};
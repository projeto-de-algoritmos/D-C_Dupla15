const movies = [
    {
       "titulo":"Matrix",
       "genero":"Action, Sci-Fi",
       "descricao":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elabo6.5 deception of an evil cyber-intelligence.",
       "rating":"8,7",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Seven: Os Sete Crimes Capitais",
       "genero":"Crime, Drama, Mystery",
       "descricao":"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
       "rating":"0",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Um Sonho de Liberdade",
       "genero":"Drama",
       "descricao":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Os Suspeitos",
       "genero":"Crime, Mystery, Thriller",
       "descricao":"A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
       "rating":"1",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Pulp Fiction: Tempo de Violência",
       "genero":"Crime, Drama",
       "descricao":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR2,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Taxi Driver: Motorista de Táxi",
       "genero":"Crime, Drama",
       "descricao":"A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to libe6.5 a presidential campaign worker and an underage prostitute.",
       "rating":"2",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"De Volta para o Futuro",
       "genero":"Adventure, Comedy, Sci-Fi",
       "descricao":"Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Casablanca",
       "genero":"Drama, Romance, War",
       "descricao":"A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
       "rating":"3",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Tubarão",
       "genero":"Adventure, Thriller",
       "descricao":"When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"007 Contra Goldfinger",
       "genero":"Action, Adventure, Thriller",
       "descricao":"While investigating a gold magnate's smuggling, James Bond uncovers a plot to contaminate the Fort Knox gold reserve.",
       "rating":"4",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTQ2MzE0OTU3NV5BMl5BanBnXkFtZTcwNjQxNTgzNA@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Silêncio dos Inocentes",
       "genero":"Crime, Drama, Thriller",
       "descricao":"A young F.B.I. cadet must receive the help of an incarce6.5d and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Star Wars, Episódio V: O Império Contra-Ataca",
       "genero":"Action, Adventure, Fantasy",
       "descricao":"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
       "rating":"5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Clube da Luta",
       "genero":"Drama",
       "descricao":"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Sindicato de Ladrões",
       "genero":"Crime, Drama, Thriller",
       "descricao":"An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
       "rating":"6",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Brilho Eterno de uma Mente sem Lembranças",
       "genero":"Drama, Romance, Sci-Fi",
       "descricao":"When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Filadélfia",
       "genero":"Drama",
       "descricao":"When a man with HIV is fired by his law firm because of his condition, he hires a homophobic small time lawyer as the only willing advocate for a wrongful dismissal suit.",
       "rating":"7",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNDE0MWE1ZTMtOWFkMS00YjdiLTkwZTItMDljYjY3MjM0NTk5XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Cantando na Chuva",
       "genero":"Comedy, Musical, Romance",
       "descricao":"A silent film production company and cast make a difficult transition to sound.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Blade Runner: O Caçador de Androides",
       "genero":"Action, Sci-Fi, Thriller",
       "descricao":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
       "rating":"8",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Moulin Rouge: Amor em Vermelho",
       "genero":"Drama, Musical, Romance",
       "descricao":"A poet falls for a beautiful courtesan whom a jealous duke covets.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMWFhYjliNjYtYjNhNS00OGExLWFhMjQtNDgwOWYyNWJiYzhmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Os Caça-Fantasmas",
       "genero":"Action, Comedy, Fantasy",
       "descricao":"Three former parapsychology professors set up shop as a unique ghost removal service.",
       "rating":"9",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Indiana Jones e a Última Cruzada",
       "genero":"Action, Adventure",
       "descricao":"In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry \"Indiana\" Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Kill Bill: Volume 1",
       "genero":"Action, Crime, Thriller",
       "descricao":"After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
       "rating":"10",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Cães de Aluguel",
       "genero":"Crime, Drama, Thriller",
       "descricao":"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Um Estranho no Ninho",
       "genero":"Drama",
       "descricao":"A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
       "rating":"8,6",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Gladiador",
       "genero":"Action, Adventure, Drama",
       "descricao":"A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
       "rating":"0",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Batman: O Cavaleiro das Trevas",
       "genero":"Action, Crime, Drama",
       "descricao":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Harry e Sally: Feitos um para o Outro",
       "genero":"Comedy, Drama, Romance",
       "descricao":"Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
       "rating":"1",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Mágico de Oz",
       "genero":"Adventure, Family, Fantasy",
       "descricao":"Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Amnésia",
       "genero":"Mystery, Thriller",
       "descricao":"A man with short-term memory loss attempts to track down his wife's murderer.",
       "rating":"2",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Quanto Mais Quente Melhor",
       "genero":"Comedy, Music, Romance",
       "descricao":"After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Duro de Matar",
       "genero":"Action, Thriller",
       "descricao":"An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
       "rating":"3",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Homem-Aranha 2",
       "genero":"Action, Adventure, Sci-Fi",
       "descricao":"Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR6,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Forrest Gump: O Contador de Histórias",
       "genero":"Drama, Romance",
       "descricao":"The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
       "rating":"4",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR2,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Hamlet",
       "genero":"Drama",
       "descricao":"Descrição não disponível",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BM2U5OWM5NWQtZDYwZS00NmI3LTk4NDktNzcwZjYzNmEzYWU1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Ed Wood",
       "genero":"Biography, Comedy, Drama",
       "descricao":"Ambitious but troubled movie director Edward D. Wood Jr. tries his best to fulfill his dreams, despite his lack of talent.",
       "rating":"5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNTA5ZjdjNWUtZGUwNy00N2RhLWJiZmItYzFhYjU1NmYxNjY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Jurassic Park: O Parque dos Dinossauros",
       "genero":"Action, Adventure, Sci-Fi",
       "descricao":"A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Sexto Sentido",
       "genero":"Drama, Mystery, Thriller",
       "descricao":"A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
       "rating":"6",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Se Meu Apartamento Falasse",
       "genero":"Comedy, Drama, Romance",
       "descricao":"A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Iluminado",
       "genero":"Drama, Horror",
       "descricao":"A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
       "rating":"7",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Superman: O Filme",
       "genero":"Action, Adventure, Drama",
       "descricao":"An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Poderoso Chefão",
       "genero":"Crime, Drama",
       "descricao":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
       "rating":"8",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg"
    },
    {
       "titulo":"E.T.: O Ext6.5rrestre",
       "genero":"Family, Sci-Fi",
       "descricao":"A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Edward Mãos de Tesoura",
       "genero":"Drama, Fantasy, Romance",
       "descricao":"An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.",
       "rating":"9",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNDUxN2I5NDUtZjdlMC00NjlmLTg0OTQtNjk0NjAxZjFmZTUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Kill Bill: Volume 2",
       "genero":"Action, Crime, Thriller",
       "descricao":"The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Drive",
       "genero":"Crime, Drama",
       "descricao":"A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor in this action drama.",
       "rating":"10",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Tempos Modernos",
       "genero":"Comedy, Drama, Family",
       "descricao":"The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Closer: Perto Demais",
       "genero":"Drama, Romance",
       "descricao":"The relationships of two couples become complicated and deceitful when the man from one couple meets the woman of the other.",
       "rating":"9,3",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BN2I0Y2JmZjQtNjEyOC00ODhkLWE5YWUtOWFkOGQwMGYyODRiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Antes do Amanhecer",
       "genero":"Drama, Romance",
       "descricao":"A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
       "rating":"0",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Corvo",
       "genero":"Action, Drama, Fantasy",
       "descricao":"A man brutally murdered comes back to life as an undead avenger of his and his fiancée's murder.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BM2Y4ZGVhZjItNjU0OC00MDk1LWI4ZTktYTgwMWJkNDE5OTcxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Os Intocáveis",
       "genero":"Crime, Drama, Thriller",
       "descricao":"During the era of Prohibition in the United States, Federal Agent Eliot Ness sets out to stop ruthless Chicago gangster Al Capone and, because of rampant corruption, assembles a small, hand-picked team to help him.",
       "rating":"1",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYTVjYWJmMWQtYWU4Ni00MWY3LWI2YmMtNTI5MDE0MWVmMmEzL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Tropa de Elite 2: O Inimigo Agora é Outro",
       "genero":"Action, Crime, Drama",
       "descricao":"After a prison riot, former-Captain Nascimento, now a high ranking security officer in Rio de Janeiro, is swept into a bloody political dispute that involves government officials and paramilitary groups.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMjEzMzMxOTUyNV5BMl5BanBnXkFtZTcwNjI3MDc5Ng@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Assassinos por Natureza",
       "genero":"Action, Crime, Drama",
       "descricao":"Two victims of traumatized childhoods become lovers and psychopathic serial murderers irresponsibly glorified by the mass media.",
       "rating":"2",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTI2NTU2Nzc0MV5BMl5BanBnXkFtZTcwMzY1OTM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Educação",
       "genero":"Drama",
       "descricao":"A coming-of-age story about a teenage girl in 1960s suburban London, and how her life changes with the arrival of a playboy nearly twice her age.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTg4NjgzOTc0MF5BMl5BanBnXkFtZTcwOTc2OTE3Mg@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Cinema Paradiso",
       "genero":"Drama",
       "descricao":"A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
       "rating":"3",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Hurricane, o Furacão",
       "genero":"Biography, Drama, Sport",
       "descricao":"The story of Rubin \"Hurricane\" Carter, a boxer wrongly imprisoned for murder, and the people who aided in his fight to prove his innocence.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTA3OTYxMzg0MDFeQTJeQWpwZ15BbWU4MDY1MjY0MTEx._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Os Caçadores da Arca Perdida",
       "genero":"Action, Adventure",
       "descricao":"In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
       "rating":"4",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Segredo dos Seus Olhos",
       "genero":"Drama, Mystery, Romance",
       "descricao":"A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Gilda",
       "genero":"Drama, Film-Noir, Romance",
       "descricao":"Descrição não disponível",
       "rating":"5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYWUxMzViZTUtNTYxNy00YjY4LWJmMjYtMzNlOThjNjhiZmZkXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Vidas em Jogo",
       "genero":"Action, Drama, Mystery",
       "descricao":"After a wealthy banker is given an opportunity to participate in a mysterious game, his life is turned upside down when he becomes unable to distinguish between the game and reality.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR4,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Cisne Negro",
       "genero":"Drama, Thriller",
       "descricao":"A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's \"Swan Lake\".",
       "rating":"6",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Rain Man",
       "genero":"Drama",
       "descricao":"Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Coração Valente",
       "genero":"Biography, Drama, History",
       "descricao":"Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
       "rating":"7",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Os Outros",
       "genero":"Horror, Mystery, Thriller",
       "descricao":"A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Fogo Contra Fogo",
       "genero":"Crime, Drama, Thriller",
       "descricao":"A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
       "rating":"8",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Satânico Dr. No",
       "genero":"Action, Adventure, Thriller",
       "descricao":"A resourceful British government agent seeks answers in a case involving the disappearance of a colleague and the disruption of the American space program.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMWRkZTI4NzktYjA4Yi00ZjE0LTgzOWQtYzJlMTkyOTU1ODRmXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Titanic",
       "genero":"Drama, Romance",
       "descricao":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
       "rating":"9",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Tiros em Columbine",
       "genero":"Documentary, Crime, Drama",
       "descricao":"Filmmaker Michael Moore explores the roots of America's predilection for gun violence.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BOWY2OWM1ODEtNDU5OS00MjMwLTliYzItZWZlOTEyYmQ2Njg4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Matrix Reloaded",
       "genero":"Action, Sci-Fi",
       "descricao":"Neo and his allies race against time before the machines discover the city of Zion and destroy it. While seeking the truth about the Matrix, Neo must save Trinity from a dark fate within his dreams.",
       "rating":"10",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Diário de uma Paixão",
       "genero":"Drama, Romance",
       "descricao":"A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon sepa6.5d because of their social differences.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Guerra nas Estrelas",
       "genero":"Action, Adventure, Fantasy",
       "descricao":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
       "rating":"8,5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Senhor dos Anéis: O Retorno do Rei",
       "genero":"Action, Adventure, Drama",
       "descricao":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
       "rating":"0",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Beleza Americana",
       "genero":"Drama",
       "descricao":"A sexually frust6.5d suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Mary Poppins",
       "genero":"Comedy, Family, Fantasy",
       "descricao":"In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
       "rating":"1",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Rocky: Um Lutador",
       "genero":"Drama, Sport",
       "descricao":"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Grease: Nos Tempos da Brilhantina",
       "genero":"Musical, Romance",
       "descricao":"Good girl Sandy Olsson and greaser Danny Zuko fell in love over the summer. When they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance?",
       "rating":"2",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Os Infiltrados",
       "genero":"Crime, Drama, Thriller",
       "descricao":"An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Sintonia de Amor",
       "genero":"Comedy, Drama, Romance",
       "descricao":"A recently widowed man's son calls a radio talk-show in an attempt to find his father a partner.",
       "rating":"3",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNWY1MDJkZGUtZTE2OS00ODZiLTlmNzQtMDZjNzM2ZjkwM2QxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"A Origem",
       "genero":"Action, Adventure, Sci-Fi",
       "descricao":"A thief who steals corpo6.5 secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Uma Mente Brilhante",
       "genero":"Biography, Drama",
       "descricao":"After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
       "rating":"4",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Carrie, a Estranha",
       "genero":"Horror",
       "descricao":"Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTlhNmVkZGUtNjdjOC00YWY3LTljZWQtMTY1YWFhNGYwNDQwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Filhos da Esperança",
       "genero":"Adventure, Drama, Sci-Fi",
       "descricao":"In 2027, in a chaotic world in which women have become somehow infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.",
       "rating":"5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTQ5NTI2NTI4NF5BMl5BanBnXkFtZTcwNjk2NDA2OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Menina de Ouro",
       "genero":"Drama, Sport",
       "descricao":"A determined woman works with a hardened boxing trainer to become a professional.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UY209_CR1,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Um Príncipe em Nova York",
       "genero":"Comedy, Romance",
       "descricao":"An extremely pampered African Prince travels to Queens, New York, and goes undercover to find a wife that he can respect for her intelligence and will.",
       "rating":"6",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BNGZlNjdlZmMtYTg0MC00MmZkLWIyNDktYmNlOWYzMTkzYWQ1XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Sweeney Todd, o Barbeiro Demoníaco da Rua Fleet",
       "genero":"Drama, Horror, Musical",
       "descricao":"The infamous story of Benjamin Barker, aka Sweeney Todd, who sets up a barber shop in London which is the basis for a sinister partnership with his fellow tenant, Mrs. Lovett.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Jogos, Trapaças e Dois Canos Fumegantes",
       "genero":"Action, Comedy, Crime",
       "descricao":"A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
       "rating":"7",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Feitiço do Tempo",
       "genero":"Comedy, Fantasy, Romance",
       "descricao":"A weatherman finds himself inexplicably living the same day over and over again.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"A Outra Face",
       "genero":"Action, Crime, Sci-Fi",
       "descricao":"In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind, who murdered his only son. The plan turns sour when the criminal wakes up prematurely and seeks revenge.",
       "rating":"8",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYzFjNzIxMmEtMzY5NS00YTgzLTkwYWEtN2FjMmY0NmNkZWY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Show de Truman: O Show da Vida",
       "genero":"Comedy, Drama, Sci-Fi",
       "descricao":"An insurance salesman discovers his whole life is actually a reality TV show.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Um Tiro na Noite",
       "genero":"Crime, Drama, Mystery",
       "descricao":"A movie sound recordist accidentally records the evidence that proves that a car accident was actually murder and consequently finds himself in danger.",
       "rating":"9",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZmZiMmZmNjQtNGM3OC00MTFkLWIxMzktZmJhMGYzMjYwYzZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Império do Sol",
       "genero":"Action, Drama, History",
       "descricao":"A young English boy struggles to survive under Japanese occupation during World War II.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMmQwNzczZDItNmI0OS00MjRmLTliYWItZWIyMjk1MTU4ZTQ4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Rei Leão",
       "genero":"Animation, Adventure, Drama",
       "descricao":"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
       "rating":"10",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Alta Fidelidade",
       "genero":"Comedy, Drama, Music",
       "descricao":"Rob, a record store owner and compulsive list maker, recounts his top five breakups, including the one in progress.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTgxMTI1ODYyOV5BMl5BanBnXkFtZTYwNjQyOTI3._V1_UY209_CR6,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Efeito Borboleta",
       "genero":"Drama, Sci-Fi, Thriller",
       "descricao":"Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.",
       "rating":"8,9",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR2,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Tempo de Recomeçar",
       "genero":"Drama",
       "descricao":"When a man is diagnosed with terminal cancer, he takes custody of his misanthropic teenage son, for whom quality time means getting high, engaging in small-time prostitution, and avoiding his father.",
       "rating":"0",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMWVlYTVmZWYtYmVjZi00MDU3LWE2ZTYtMGE4NTAyM2RiNDFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Réquiem para um Sonho",
       "genero":"Drama",
       "descricao":"The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Elefante",
       "genero":"Crime, Drama, Thriller",
       "descricao":"Several ordinary high school students go through their daily routine as two others prepare for something more malevolent.",
       "rating":"1",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BZWRhNDZkMzQtZDQ3Ny00NjdjLWJmZjAtMWQxNDQyZTYzZjU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR4,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Sobre Meninos e Lobos",
       "genero":"Crime, Drama, Mystery",
       "descricao":"The lives of three men who were childhood friends are shattered when one of them has a family tragedy.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTIzNDUyMjA4MV5BMl5BanBnXkFtZTYwNDc4ODM3._V1_UY209_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"O Exorcista",
       "genero":"Horror",
       "descricao":"When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
       "rating":"2",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
       "titulo":"Um Beijo a Mais",
       "genero":"Comedy, Drama, Romance",
       "descricao":"Michael'd have a great job, still have his 4 best friends, and be in love with a beautiful girl at 30. He loves Jenna but his life seems predictable until he meets a college girl. It seems that everybody's having relationship problems.",
       "rating":"6.5",
       "movieImage":"https://m.media-amazon.com/images/M/MV5BMTk3Mjk4Mjg1OV5BMl5BanBnXkFtZTgwMzU0NTgxMDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    }
 ]

 export default movies;
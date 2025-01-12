
import React from 'react';
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaInstagram, FaTwitter ,FaPlay} from 'react-icons/fa';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {
      // const response = await fetchLandingPageByUsername(username);
      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistBioBg":"",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#000000",
          "gradientEnd": "#212121",
          "SongGradientStart": '#89A8B2',
          "SongGradientEnd": '#E5E3D4',   
          "TextColor": '#ffffff',             
          "ButtonColor": '#1c3faa',            
          "ButtonHoverColor": '#162d6a',      
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team",
            "Perfbackground": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2kt2kx9PpMGHDTZKghS_U9RblvAWMocDwA&s"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo",
            "Perfbackground": "https://vishal-mishra.com/wp-content/uploads/2024/05/2.jpg"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo",
            "Perfbackground": "https://vishal-mishra.com/wp-content/uploads/2024/05/4.jpg"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          },
          {
            "merchId": "merc2",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
        {
          "videoId": "vid1",
          "title": "Melodic Memories",
          "description": "A visual treat of my recent performance.",
          "platform": "YouTube",
          "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
          "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
        },
        {
          "videoId": "vid2",
          "title": "Melodic Memories",
          "description": "A visual treat of my recent performance.",
          "platform": "YouTube",
          "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
          "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
        },
        {
          "videoId": "vid3",
          "title": "Rhythmic Reflections",
          "description": "An enchanting blend of rhythm and melody from my latest performance.",
          "platform": "YouTube",
          "redirectURL": "https://youtu.be/hpqvSU0Ynn0?si=S9ml-y5cHpNy3apF",
          "imageURL": "https://www.myfirstevent.com/wp-content/uploads/2023/06/vishal-mishra.jpg"
        },
        {
          "videoId": "vid4",
          "title": "Melody in Motion",
          "description": "A heartfelt rendition, capturing the essence of music.",
          "platform": "YouTube",
          "redirectURL": "https://youtu.be/CmZnYmWh5V4?si=uPVOlJxsA_EcjnQe",
          "imageURL": "https://i.ytimg.com/vi/tYlbthzV98w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAq_LVLi7egJRPwQhr0kTSX-AoyWg"
        }
      ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3",
          "socialLinks": {
            "instagram": "https://instagram.com/vishalmishra",
            "twitter": "https://twitter.com/vishalmishra"
          }
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <div
    className="min-h-screen bg-black-50 flex flex-col items-center"
    style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
    }}
  >
    {/* Navbar Section */}
    <nav id="navbar" className="fixed top-0 w-full z-50 bg-trans shadow-lg" s>
    
                <CardContent className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center bg-trans">
                  <h2 className="font-semibold text-xl">@{username}</h2>
                  <Tabs>
                  <TabsList className="hidden md:flex bg-trans">
                    <TabsTrigger
                      value="performances"
                      onClick={() => scrollToSection('performances')}
                      className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1DB954] data-[state=active]:text-black data-[state=active]:shadow-sm"
                    >
                      Performances
                    </TabsTrigger>
                    <TabsTrigger
                      value="videos"
                      onClick={() => scrollToSection('videos')}
                      className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1DB954] data-[state=active]:text-black data-[state=active]:shadow-sm"
                    >
                      Videos
                    </TabsTrigger>
                    <TabsTrigger
                      value="songsSale"
                      onClick={() => scrollToSection('songsSale')}
                      className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1DB954] data-[state=active]:text-black data-[state=active]:shadow-sm"
                    >
                      Songs Sale
                    </TabsTrigger>
                    <TabsTrigger
                      value="merchandise"
                      onClick={() => scrollToSection('merchandise')}
                      className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1DB954] data-[state=active]:text-black data-[state=active]:shadow-sm"
                    >
                      Merchandise
                    </TabsTrigger>
                    <TabsTrigger
                      value="fanMessages"
                      onClick={() => scrollToSection('messages')}
                      className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1DB954] data-[state=active]:text-black data-[state=active]:shadow-sm"
                    >
                      Messages
                    </TabsTrigger>
                    <TabsTrigger
                      value="support"
                      onClick={() => scrollToSection('support')}
                      className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#1DB954] data-[state=active]:text-black data-[state=active]:shadow-sm"
                    >
                      Support
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                </div>
              </CardContent>
            
          </nav>
          
 {/* Main Content Container */}
  <div className="w-full space-y-1">
 {/* Profile Section */}
<div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start h-screen bg-[url('https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg')] bg-cover bg-center z-0">
  {/* Overlay for fade effect */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

  {/* Card Section */}
  <div className="z-20 w-full max-w-lg lg:w-2/3 p-12 lg:p-12 bg-trans rounded-lg mt-32 sm:mt-40 lg:mt-64">

    {/* Artist Name */}
    <h2 className=" z-20 text-8xl sm:text-3xl lg:text-5xl xl:text-5xl font-bold text-center lg:text-left text-white">
      {artistPage.artistName}
    </h2><br></br>
    
    {/* Stage Titles */}
    <h4 className="text-md sm:text-lg lg:text-xl mt-2 font-semibold text-center lg:text-left text-white">
      {artistPage.stageTitles}
    </h4>

    {/* Social Links Section */}
    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
      {musicPlatformLinks.map((link) => (
        <button
          key={link.musicPlatform + link.url}
          className="flex items-center w-full sm:w-auto p-3 border border-[#1DB954] rounded-full shadow-md transition hover:bg-[#1DB954] hover:text-black"
          onClick={() => link.url && window.open(link.url, '_blank')}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 mr-3">
            {link.icon ? (
              <img
                src={link.icon}
                alt={`${link.musicPlatform} icon`}
                className="w-10 h-10 object-cover rounded-full"
              />
            ) : null}
          </div>
          <span className="text-sm sm:text-md font-bold text-white transition hover:text-black">
            {link.musicPlatform || ' '}
          </span>
        </button>
      ))}
    </div>
  </div>

</div>

        {/* About Section */}
        <div
  className="w-full bg-cover bg-center text-white p-6 flex flex-col justify-center rounded-lg border-4 border-[#1DB954] relative"
  style={{
    backgroundImage: "url('https://filmfaremiddleeast.com/wp-content/uploads/2023/10/Vishal-Mishra-3-.jpg')",
    backgroundColor: "rgb(61, 61, 61, 0.2)", // Semi-transparent overlay for background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: '60vh', // Reduced image height
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

  {/* Title - About Us */}
  <div className="absolute top-6 left-6">
    <h2 className="text-[#1DB954] text-4xl font-extrabold sm:text-3xl">About Us</h2>
  </div>

  {/* Bio Section */}
  <div className="relative z-10 text-center mt-24 px-4 sm:mt-12 sm:px-6">
    <p className="text-white text-lg sm:text-xl">{artistPage.artistBio}</p>
  </div>
</div>


        {/* Music Videos Section */}
        <div id="videos" className="mt-8">
        <div
          className="p-6 w-full mx-auto backdrop-blur-lg rounded-lg shadow-lg mb-8 border-4 border-[#1DB954]"
          style={{ backgroundColor: "rgba(61, 61, 61, 0.2)" }}
        >
          <CardHeader>
            <CardTitle className="text-[#1DB954] text-4xl font-extrabold">Music Videos</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Centered Text Above Music Tabs */}
            <div className="text-center mb-6">
              <p className="text-white text-2xl font-bold">
                Explore the Latest and Trending Music Videos
              </p>
            </div>
            {/* Grid layout with 2 items per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {musicVideos.map((video) => (
                <div
                  key={video.videoId}
                  className="flex items-center gap-3 p-4 bg-white/30 rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-white/50 cursor-pointer transform hover:-translate-y-1 border border-[#1DB954]"
                  onClick={() => window.open(video.redirectURL, "_blank")}
                >
                  {/* Video Thumbnail */}
                  <div className="w-15 h-16 flex-shrink-0">
                    <img
                      src={video.imageURL}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-md border border-[#1DB954]"
                    />
                  </div>

                  {/* Video Details */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm text-black">{video.title}</h3>
                    <p className="text-xs text-white font-semibold">{video.description}</p>
                  </div>

                  {/* Spotify-Themed Play Button */}
                  <button
                    className="flex items-center justify-center w-10 h-10 text-white bg-[#1DB954] rounded-full shadow-md transition-transform transform hover:scale-110"
                    aria-label="Play Video"
                  >
                    <FaPlay />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </div>

        <ScrollArea>


          {/* Performances Section */}
<div id="performances" className="mt-8">
  <div
    className="p-6 w-full mx-auto backdrop-blur-lg rounded-lg shadow-lg mb-8 border-4 border-[#1DB954]"
    style={{ backgroundColor: "rgb(61, 61, 61 , 0.2)" }}
  >
    <h2 className="text-3xl font-bold text-center text-[#1DB954] mb-6">
      Performances
    </h2>

    {/* Flexbox for Performances */}
    <div className="flex flex-wrap gap-6 justify-center">
      {performances.map((perf) => (
        <div
          key={perf.performanceId}
          className="flex-1 min-w-[300px] max-w-[400px] relative p-6 rounded-xl shadow-lg bg-black bg-opacity-60 text-white border border-[#1DB954] overflow-hidden"
          style={{
            backgroundImage: `url(${perf.Perfbackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">{perf.eventTitle}</h3>
            <p className="mb-2">{perf.description}</p>
            <p>Duration: {perf.durationMinutes} mins</p>
            <p>Location: {perf.platform}</p>
            <p>Price: ${perf.ticketPrice}</p>
          </div>

          {/* Book Now Button */}
          <div className="relative z-10 mt-4">
            <button className="bg-white hover:bg-[#1DB954] text-black font-bold py-2 px-4 rounded-full transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



          {/* Songs Sales Section */}
<div id="songsSale" className="mt-8">
  <div
    className="p-6 w-full mx-auto backdrop-blur-lg rounded-lg shadow-lg mb-8 border-4 border-[#1DB954]"
    style={{ backgroundColor: "rgb(61, 61, 61, 0.2)" }}
  >
    <h2 className="text-3xl font-bold text-center text-[#1DB954] mb-6">
      Songs for Sale
    </h2>

    {/* Songs Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
      {songSales.map((song) => (
        <div
          key={song.songId}
          className="bg-black bg-opacity-90 text-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-[#1DB954] transition-transform transform hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image Section */}
          <div className="h-48">
            <img
              src={song.imageURL} // Ensure each song object includes an `imageURL` property
              alt={song.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex-grow flex flex-col justify-between">
            {/* Title and Description */}
            <div>
              <h3 className="text-xl font-bold text-[#1DB954] mb-2">
                {song.title}
              </h3>
              <p className="text-sm text-gray-300">
                {song.description}
                <br />
                Pricing: {song.priceType}
                {song.price && ` - $${song.price}`}
              </p>
            </div>

            {/* Button */}
            <button
              className="mt-4 w-full px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-[#1DB954] hover:text-black transition-all duration-300"
            >
              View Songs
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


          {/* Merchandise Section */}
          <div id="merchandise" className="mt-8">
          <div
            className="p-6 w-full max-w-7xl mx-auto backdrop-blur-lg rounded-lg shadow-lg mb-8 border-4 border-[#1DB954]"
            style={{ backgroundColor: "rgb(61, 61, 61, 0.2)" }}
          >
            <h2 className="text-3xl font-bold text-center text-[#1DB954] mb-6">
              Merchandise
            </h2>

            {/* Responsive Merchandise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {merchandise.map((merc) => (
                <div
                  key={merc.merchId}
                  className="bg-black bg-opacity-90 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-[#1DB954]"
                >
                  {/* Wrapper for Image and Content */}
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                      <img
                        src={merc.imageURL}
                        alt={merc.merchName}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-grow flex flex-col justify-between w-full md:w-1/2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1DB954] mb-4">
                          {merc.merchName}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mb-3">
                          {merc.merchDescription}
                        </p>
                        <p className="text-gray-400 text-sm">
                          <strong>Price:</strong> ${merc.price} <br />
                          <strong>Type:</strong> {merc.merchType}
                        </p>
                      </div>
                      <button
                        className="mt-6 px-6 py-2 bg-[#1DB954] text-black font-semibold rounded-lg hover:bg-[#1ed760] transition-colors duration-200"
                      >
                        View Bundle
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


          {/* Messages Section */}
<div className="p-6 max-w-full mx-auto  backdrop-blur-lg rounded-lg shadow-lg mb-8 border-4 border-[#1DB954]" style={{ backgroundColor: "rgb(61, 61, 61 , 0.2)" }}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Fan Messages Section */}
    <div id="messages">
      {fanMessages && (
        <div className="p-6 w-full backdrop-blur-lg rounded-lg shadow-lg" style={{ backgroundColor: "rgb(61, 61, 61 , 0.2)" }}>
          <h2 className="text-3xl font-bold text-center text-[#1DB954] mb-6">Fan Messages</h2>

          <Card className="mb-4 bg-black">
            <CardHeader>
              <CardTitle className ="text-[#1DB954]" >Message Me</CardTitle>
              <CardDescription className = "text-white">
                {fanMessages.title}
                <br />
                {fanMessages.description}
                <br />
                Promised Reply Time: {fanMessages.promisedReplyTime} hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
              <Button
            className="bg-white hover:bg-[#1DB954] text-black font-medium py-2 px-6 md:px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            style={{
              cursor: "pointer",
            }}
          >
            Send Message
          </Button>


                {/* Connect with me section and social links */}
                <div className="flex items-center gap-4">
                  {fanMessages.socialLinks && (
                    <>
                      
                      <a
                        href={fanMessages.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        <FaInstagram size={30} color="#E4405F" />
                      </a>
                      <a
                        href={fanMessages.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        <FaTwitter size={30} color="#1DA1F2" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>

    {/* Support Section */}
    <div id="support">
      {supportPage && (
        <div className="p-6 w-full backdrop-blur-lg rounded-lg shadow-lg" style={{ backgroundColor: "rgb(61, 61, 61 , 0.2)" }}>
          <h2 className="text-3xl font-bold text-center text-[#1DB954] mb-6">Support Me</h2>

          <Card className="mb-4 bg-black">
            <CardHeader>
              <CardTitle className="text-[#1DB954]">Support</CardTitle>
              <CardDescription>{supportPage.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-white hover:bg-[#1DB954] text-black font-medium py-2 px-4 rounded transition-colors duration-200">
                Support
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  </div>
</div>

        </ScrollArea>
      </div>
    </div>
  );
};

export default LandingPageView2;

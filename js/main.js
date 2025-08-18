function newQoute(){
    var qoutes = [
         "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.Martin Luther King Jr., A Testament of Hope: The Essential Writings",
          "Live as if you were to die tomorrow. Learn as if you were to live forever.” Mahatma Gandhi", 
          "We accept the love we think we deserve.Stephen Chbosky, The Perks of Being a Wallflower", 
          "Without music, life would be a mistake.Friedrich Nietzsche, Twilight of the Idols",
          "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.” Steve Jobs",
          "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” H. Jackson Brown Jr., P.S. I Love You",
          "Insanity is doing the same thing, over and over again, but expecting different results.” Narcotics Anonymous"
        ];
    
    var randomQoutes= qoutes[Math.floor(Math.random() * qoutes.length)];
    document.getElementById("qoute").innerHTML=randomQoutes;
}


const comments = [
    "so so so pretty! 🌷 always spreading your wings and taking off! ✈️✨",
    "Beautiful views from Dubai! 😍 the travel aesthetic is next level 🔥",
    "Wow! Radhe Radhe ✨ such a lovely and peaceful vibe 🪷❤️",
    "Your flight diaries and uniform posts are just gorgeous! 🛫 Slaying as always!",
    "Honestly, your reels are so engaging! Posing in Bengaluru and Kochi like a pro 🌍🌸",
    "Varanasi looks absolutely magical in your stories! ✨ Radhe Radhe 🪷",
    "So proud of you! Keep flying high and spreading positive energy ✈️💫",
    "Absolutely love your travel aesthetic! Indonesia pictures are stunning 🇮🇩❤️",
    "Such an elegant showcase of cabin crew life! ✈️💖 Real angel on the ground and in the air!",
    "Radhe Radhe! 🪷 Truly love the grace and confidence you bring to your content 🌟"
]

const Comments = () => {
    return (
        <section className="comments-bg">
            <div className="container">
                <div className="comments">
                    {comments.map((comment, index) => (
                        <div className="comment-box" key={index}>
                            <p>{comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Comments;
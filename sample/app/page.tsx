"use client";

import { useState } from "react";

const dogs = [
  {
    id: 1,
    name: "Balla",
    breed: "Golden Retriever",
    age: 3,
    bio: "Loves long walks on the beach and chasing tennis balls. Looking for an active playmate!",
    image: "🐕",
    color: "#FFB347",
  },
  {
    id: 2,
    name: "Max",
    breed: "German Shepherd",
    age: 5,
    bio: "Loyal, protective, and loves belly rubs. Expert frisbee catcher seeking adventure buddy.",
    image: "🐺",
    color: "#8B4513",
  },
  {
    id: 3,
    name: "Luna",
    breed: "Beagle",
    age: 2,
    bio: "Sniffing enthusiast who follows her nose everywhere. Food motivated and super friendly!",
    image: "🐶",
    color: "#D2691E",
  },
  {
    id: 4,
    name: "Rocky",
    breed: "Bulldog",
    age: 4,
    bio: "Chill vibes only. Perfect Netflix & chill companion. Enjoys treats and afternoon naps.",
    image: "🐕‍🦺",
    color: "#808080",
  },
  {
    id: 5,
    name: "Coco",
    breed: "Poodle",
    age: 1,
    bio: "Young, energetic, and always ready to play! Smart pup looking for intellectual stimulation.",
    image: "🐩",
    color: "#FF69B4",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<string[]>([]);
  const [rejected, setRejected] = useState<string[]>([]);
  const [animation, setAnimation] = useState<"none" | "left" | "right">("none");

  const currentDog = dogs[currentIndex];

  const handleLike = () => {
    if (!currentDog) return;
    setAnimation("right");
    setTimeout(() => {
      setMatches((prev) => [...prev, currentDog.name]);
      setCurrentIndex((prev) => prev + 1);
      setAnimation("none");
    }, 300);
  };

  const handleDislike = () => {
    if (!currentDog) return;
    setAnimation("left");
    setTimeout(() => {
      setRejected((prev) => [...prev, currentDog.name]);
      setCurrentIndex((prev) => prev + 1);
      setAnimation("none");
    }, 300);
  };

  const reset = () => {
    setCurrentIndex(0);
    setMatches([]);
    setRejected([]);
    setAnimation("none");
  };

  const getCardStyle = () => {
    if (animation === "right") {
      return {
        transform: "translateX(150%) rotate(20deg)",
        opacity: 0,
        transition: "all 0.3s ease-out",
      };
    }
    if (animation === "left") {
      return {
        transform: "translateX(-150%) rotate(-20deg)",
        opacity: 0,
        transition: "all 0.3s ease-out",
      };
    }
    return {
      transform: "translateX(0) rotate(0)",
      opacity: 1,
      transition: "all 0.3s ease-out",
    };
  };

  if (currentIndex >= dogs.length) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🎉 All Done!</h1>
        
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Your Matches ({matches.length})
          </h2>
          {matches.length === 0 ? (
            <p>No matches yet - keep looking!</p>
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {matches.map((name, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "1rem",
                  }}
                >
                  ❤️ {name}
                </span>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "10px", opacity: 0.8 }}>
            Passed on ({rejected.length})
          </h2>
          <p style={{ opacity: 0.6 }}>
            {rejected.length > 0 ? rejected.join(", ") : "No rejections - you're kind!"}
          </p>
        </div>

        <button
          onClick={reset}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            borderRadius: "30px",
            border: "none",
            background: "white",
            color: "#764ba2",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          Start Over 🔄
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
      }}
    >
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>🐾 Pawnder</h1>
        <p style={{ margin: "5px 0 0", opacity: 0.8 }}>Find your pup's perfect match</p>
      </header>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          height: "500px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            overflow: "hidden",
            ...getCardStyle(),
          }}
        >
          <div
            style={{
              height: "60%",
              background: currentDog.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8rem",
            }}
          >
            {currentDog.image}
          </div>

          <div style={{ padding: "20px", color: "#333" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
                {currentDog.name}, {currentDog.age}
              </h2>
              <span
                style={{
                  background: "#f0f0f0",
                  padding: "4px 12px",
                  borderRadius: "15px",
                  fontSize: "0.85rem",
                  color: "#666",
                }}
              >
                {currentDog.breed}
              </span>
            </div>
            <p style={{ margin: 0, color: "#666", fontSize: "0.95rem", lineHeight: 1.4 }}>
              {currentDog.bio}
            </p>
          </div>
        </div>

        {animation === "right" && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              border: "4px solid #4CAF50",
              color: "#4CAF50",
              fontSize: "2rem",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              transform: "rotate(-20deg)",
              zIndex: 10,
            }}
          >
            LIKE ❤️
          </div>
        )}

        {animation === "left" && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              border: "4px solid #f44336",
              color: "#f44336",
              fontSize: "2rem",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              transform: "rotate(20deg)",
              zIndex: 10,
            }}
          >
            NOPE ❌
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={handleDislike}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "none",
            background: "white",
            fontSize: "2rem",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ❌
        </button>

        <button
          onClick={handleLike}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
            fontSize: "2rem",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ❤️
        </button>
      </div>

      <div style={{ textAlign: "center", opacity: 0.8 }}>
        <p style={{ fontSize: "0.9rem" }}>
          Dog {currentIndex + 1} of {dogs.length}
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "10px",
            fontSize: "0.9rem",
          }}
        >
          <span>❤️ {matches.length} matches</span>
          <span>💔 {rejected.length} passed</span>
        </div>
      </div>
    </div>
  );
}

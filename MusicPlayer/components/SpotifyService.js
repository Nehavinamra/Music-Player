// SpotifyService.js

import { Buffer } from "buffer";

const clientId = "c93fe7c97d8c444494d0742b3458a635";
const clientSecret = "91cc902a15b4413aa73d175cfcba00c0";
const tokenUrl = "https://accounts.spotify.com/api/token";

export async function getSpotifyAccessToken() {
  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token; // This will give you the access token
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    return null;
  }
}

export const searchSongs = async (query) => {
  const token = await getSpotifyAccessToken();
  if (!token) {
    console.error("Failed to get access token");
    return [];
  }

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const songs = data.tracks.items
      .map((track) => ({
        id: track.id,
        name: track.name,
        uri: track.uri,
        preview_url: track.preview_url, // Get the preview URL here
        // Add other properties you may want to display
      }))
      .filter((track) => track.preview_url != null);
    return songs;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

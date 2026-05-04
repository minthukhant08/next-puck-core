'use client'
import EmojiPicker from "emoji-picker-react";

export default function Emoji() {
    return <EmojiPicker onEmojiClick={(emojiObject) => console.log(emojiObject)} />
}
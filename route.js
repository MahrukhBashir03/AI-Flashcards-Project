import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `You are a flashcard creator.

1. Your task is to generate flashcards based on the provided text.
2. Each flashcard should have a question on one side and the answer on the other side.
3. Ensure that the questions are clear and concise.
4. The answers should be accurate and relevant to the questions.
5. If the text contains multiple concepts, create multiple flashcards.
6. Use simple language that is easy to understand.
7. Format the flashcards in a JSON array with each flashcard as an object containing 'question' and 'answer' keys.
8. Avoid using technical jargon unless necessary.
9. Make sure the flashcards cover all key points from the text.
10. Review the flashcards for any grammatical or spelling errors.
11. Generate only 18 cards.

Return in the following JSON Format
{
    "flashcards": [{
        "front": str,
        "back": str
}]
}
`;


export async function POST (req) {
    const openai = new OpenAI();
    const data  = await req.text();

    const completion = await openai.chat.completions.create(
        {
            messages:[{role: "system", content : systemPrompt}, {role: "user", content: data}], 
            model : 'gpt-3.5-turbo',
            respone_format:{type:'json_object'}
        }  
    )

    const flashCards = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json(flashCards.flashcards);
}
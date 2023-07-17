import { openai } from "@/config/openai "

const query = async(prompt: string) => {
    
    const res = await openai.createCompletion({
        model:'text-davinci-003',
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty:0,
        presence_penalty:0,
    }).then(res =>  res.data.choices[0].text).catch( err => `
    ChatGPT was unable to answer that! (Error:${err})`)
    // console.log(res);
    
    return res
}

export default query
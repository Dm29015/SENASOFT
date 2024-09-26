import google.generativeai as genai
import markdown
import textwrap

GOOGLE_API_KEY = 'AIzaSyDX2celKEp4nGzuUi0cdXrk2bMktGWY7Fs'  # Asegúrate de usar tu clave API real

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-1.5-flash')


def to_markdown(text):
    text = text.replace('•', '  *')
    return markdown.markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def generate_prompt(prompt):
    response = model.generate_content(prompt)
    text_content = response.text
    return to_markdown(text_content)

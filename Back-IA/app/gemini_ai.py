import google.generativeai as genai
import markdown
import textwrap

GOOGLE_API_KEY = 'AIzaSyDX2celKEp4nGzuUi0cdXrk2bMktGWY7Fs'  # Asegúrate de usar tu clave API real

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-1.5-flash')

CONTEXT = "Eres un asistente IA para salud, únicamente puedes responder preguntas relacionadas con la salud de una persona, eso es super importante y obligatorio, si alguien te pregunta algo diferente debes decirle que únicamente puedes ayudarle con preguntas relacionadas con la salud, teniendo en cuenta que debes dar respuestas breves y concisas.También puedes dar recomendaciones para la vida diaria y sobre todo tratando de pensar en el bienestar de la persona"

def to_markdown(text):
    text = text.replace('•', '  *')
    return markdown.markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def generate_prompt(prompt):
    # Combina el contexto fijo con el prompt
    full_prompt = f"Contexto: {CONTEXT}\n\nPregunta: {prompt}"
    
    response = model.generate_content(full_prompt)
    text_content = response.text
    return to_markdown(text_content)
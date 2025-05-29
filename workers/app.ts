export default {
  // biome-ignore lint/suspicious/useAwait: <explanation>
  async fetch(request, env, ctx) {
    return new Response('Hello, World!', {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  },
}

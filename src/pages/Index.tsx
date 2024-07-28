function Page() {
  return (
    <div className="flex gap-2">
      <div className="rounded border-2 border-cyan-500 bg-cyan-50 p-2 shadow transition-shadow hover:shadow-lg">
        <h2 className="text-xl text-cyan-500">AES Encryption</h2>
        <p>
          AES (Advanced Encryption Standard) encryption is a widely known
          standrad encryption algorithm. This algorithm uses a key to encrypt
          text. The same key is required to decrypt that text.
        </p>
        <a
          className="ml-auto mt-1 block w-fit justify-end rounded bg-cyan-300 px-2 py-1 transition-[background] hover:bg-cyan-400"
          href="/aes">
          Encrypt & Decrypt
        </a>
      </div>
    </div>
  )
}

export default Page

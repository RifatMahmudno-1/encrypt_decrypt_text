import { useState, useRef, FormEvent } from 'react'
import { aesEncrypt, aesDecrypt } from '@/assets/aes_gcm'

function Page() {
  const [type, setType] = useState<'Encrypt' | 'Decrypt'>('Encrypt')
  const [convertedText, setConvertedText] = useState<string>('')
  const [busy, setBusy] = useState(false)
  const textarea = useRef<HTMLTextAreaElement>(null)
  const keyEl = useRef<HTMLInputElement>(null)

  async function convert(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    try {
      if (type === 'Encrypt') {
        const convText = await aesEncrypt(
          textarea.current!.value,
          keyEl.current!.value
        )
        setConvertedText(convText)
      } else {
        const convText = await aesDecrypt(
          textarea.current!.value,
          keyEl.current!.value
        )
        setConvertedText(convText)
      }
    } catch {
      setConvertedText('')
      globalThis.alert('Some errors have occured. Please try again.')
    }
    setBusy(false)
  }

  return (
    <form className="grid gap-2" onSubmit={convert}>
      <div className="flex items-center gap-2">
        <p>Select Type:</p>
        <div className="flex items-center gap-1">
          <span>Encrypt</span>
          <button
            type="button"
            className="aspect-[2/1] w-[3rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] rounded-tl-[1.5rem] rounded-tr-[1.5rem] bg-cyan-300 p-0.5"
            onClick={() => {
              setConvertedText('')
              textarea.current!.value = ''
              keyEl.current!.value = ''
              setType(s => (s === 'Encrypt' ? 'Decrypt' : 'Encrypt'))
            }}
            disabled={busy}>
            <span
              className={`relative block aspect-square h-full rounded-full bg-white transition-[left_transform] ${type === 'Encrypt' ? 'left-[0%] translate-x-[0%]' : 'left-[100%] translate-x-[-100%]'}`}></span>
          </button>
          <span>Decrypt</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="key">Password:</label>
        <input
          ref={keyEl}
          type="text"
          spellCheck="false"
          autoSave="false"
          id="key"
          required
          placeholder={'Enter password to ' + type.toLowerCase()}
          className="w-full rounded border-2 border-cyan-400 bg-cyan-100 px-1"
          disabled={busy}
        />
      </div>
      <label htmlFor="textarea">Text to {type}:</label>
      <textarea
        ref={textarea}
        id="textarea"
        className="h-[15rem] min-h-[15rem] w-full resize-y rounded border-2 border-cyan-400 bg-cyan-100 px-1"
        placeholder={'Enter the text that you want to ' + type.toLowerCase()}
        required
        disabled={busy}
      />
      <div className="flex justify-center gap-2">
        <button
          type="submit"
          className="w-fit rounded bg-cyan-400 px-4 py-1 shadow transition-shadow hover:shadow-lg"
          disabled={busy}>
          {type}
        </button>
        <button
          onClick={() => {
            setConvertedText('')
            textarea.current!.value = ''
            keyEl.current!.value = ''
          }}
          type="button"
          className="w-fit rounded bg-red-500 px-4 py-1 shadow transition-shadow hover:shadow-lg"
          disabled={busy}>
          Reset
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p>{type === 'Encrypt' ? 'Encrypted' : 'Actual'} Text:</p>
        <button
          disabled={busy || !convertedText}
          type="button"
          className="rounded bg-cyan-400 px-2 py-0.5 shadow transition-shadow hover:shadow-lg"
          onClick={() => {
            try {
              globalThis.navigator.clipboard.writeText(convertedText)
              globalThis.alert('Text was copied to your clipboard.')
            } catch {
              globalThis.alert('Failed to copy. Copy manually.')
            }
          }}>
          Copy
        </button>
      </div>
      <div className="h-[15rem] min-h-[15rem] w-full resize-y flex-wrap overflow-auto whitespace-pre-wrap break-words rounded border-2 border-cyan-400 bg-cyan-100 px-1">
        {convertedText || (
          <span className="cursor-default select-none text-slate-400">
            {type === 'Encrypt' ? 'Encrypted' : 'Actual'} text will be shown
            here...
          </span>
        )}
      </div>
    </form>
  )
}

export default Page

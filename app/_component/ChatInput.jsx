import { Button } from '../../components/ui/button'
import { Mic, Paperclip, Send } from 'lucide-react'
import React from 'react'
import AiMultiModels from './AiMultiModels'

function ChatInput() {
  return (
 <div className='relative min-screen'>  
      { /* Page content*/}   
      <div> 
    <AiMultiModels/>

    </div>{
    /* Fixed chat input */}
    <div className='fixed bottom-0 left-0 w-full flex justify-center px-4 pb-4'>
          <div className='w-full border rounded-xl shadow-md max-w-2xl p-4'>
            <input type = 'text' placeholder='Ask me anything...'
            className='border-0 outline-none'/>
         <div className='mt-3 flex justify-between items-center'>
        <Button  className size = {'icon'}>   
                <Paperclip className='h-5 w-5'/>
           </Button>
           <div className='flex gap-5'>
            <Button variant = {'ghost'} size = {'icon'}><Mic/></Button>
            <Button size = {'icon'}><Send/></Button>
           </div>
         </div>
          </div>
    </div>
    </div>
   
  )
}

export default ChatInput
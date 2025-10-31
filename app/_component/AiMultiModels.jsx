import AiModelList from '../../Shared/AiModelList';
import { useState ,useEffect, useContext}  from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Switch } from '../../components/ui/switch';
import { Lock, MessagesSquare } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { AiSelectedModelContext } from '@/context/AiSelectedModelContext';
import { useUser } from '@clerk/nextjs';

function AiMultiModels() {
  const {user} = useUser
  const [aiModelList, setAiModelList] = useState(AiModelList);
  const {AiSelectedModels,setAiSelectedModels} = useContext(AiSelectedModelContext)
  const onToggleChange = (model, value) => {
    setAiModelList((prev) =>
      prev.map((m) =>
        m.model === model ? { ...m, enable: value } : m
      )
    );
  };
  const onSelectedValue =async(parentModel,value)=>{
    setAiSelectedModels(prev =>({
      ...prev,
      [parentModel]:{
        modelId:value
      }
    }))
    //update to firebase database
    const docRef = doc(db,"users",user?.primaryEmailAddress?.emailAddress);
    await updateDoc(docRef,{
      selectedModelPref:AiSelectedModels
    })
  }

  return (
    <div className='flex flex-1 border-b'>
      {aiModelList.map((model, index) => (
        <div
          key={index}
          className={`
            flex flex-col h-full border-r overflow-hidden // Changed to flex-col
            transition-all duration-300 ease-in-out
            ${model.enable ? 'flex-1 min-w-[400px]' : 'w-[100px] flex-none'}
          `}
        >
          {/* Header Section */}
          <div className='flex w-full h-[70px] shrink-0 items-center justify-between border-b p-4'>
            <div className='flex items-center gap-4'>
              <img src={model.icon} alt={model.model} width={24} height={24} />
              <div className={!model.enable ? 'hidden' : ''}>
                
                <Select defaultValue = {AiSelectedModels[model?.model.toUpperCase()]?.modelId} onValueChange={(value)=>onSelectedValue(model.model,value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={AiSelectedModels[model?.model]?.modelId} />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup className="px-3">
                    <SelectLabel className='text-sm text-gray-400'>Free</SelectLabel>
                    {model.subModel.map((subModel, i) => subModel.premium==false &&(
                      <SelectItem key={i} value={subModel.id}>{subModel.name}
                      </SelectItem>
                    ))}
                    </SelectGroup>
                       <SelectGroup className="px-3">
                    <SelectLabel className='text-sm text-gray-400'>Premium</SelectLabel>
                    {model.subModel.map((subModel, i) => subModel.premium== true &&(
                      <SelectItem key={i} value={subModel.name}  disabled= {subModel.premium} >{subModel.name} {subModel.premium && <Lock className='h-4 w-4'/>}</SelectItem>
                    ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
                  
              <div>
                {model.enable ? (
                  <Switch
                    checked={model.enable}
                    onCheckedChange={(v) => onToggleChange(model.model, v)}
                  />
                ) : (
                  <MessagesSquare
                    className='cursor-pointer'
                    onClick={() => onToggleChange(model.model, true)}
                  />
                )}
              </div>
            </div>
          </div>

          {/* --- FIX: Content & Chat Box Area --- */}
          <div className="flex-1 overflow-auto">
            {model.enable && (
              <>
                {model.premium ? (
                  <div className='flex items-center justify-center h-full'>
                    <Button><Lock className='mr-2 h-4 w-4' />Upgrade to unlock</Button>
                  </div>
                ) : (
                  // This is the new, empty chat box
                  <div className="p-4">
                    {/* Your chat messages will go here */}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AiMultiModels;
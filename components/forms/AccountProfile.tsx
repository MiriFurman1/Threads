"use client";
import {useForm} from 'react-hook-form'
import { Form } from "@/components/ui/form";
import {zodResolver} from '@hookform/resolvers/zod'
interface Props {
  user: {
    id: string;
    objectsId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
function AccountProfile({ user, btnTitle }: Props) {
    const form=useForm({
        resolver: zodResolver()
    })
  return (
  <div>
    <Form>

    </Form>

  </div>
  )
}

export default AccountProfile;

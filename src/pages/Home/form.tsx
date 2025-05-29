import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithValibot } from '@conform-to/valibot'
import { object, string } from 'valibot'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

const schema = object({
  email: string('Email is required'),
  password: string('Password is required'),
})

export const Form = () => {
  const [form, { email, password }] = useForm({
    onValidate({ formData }) {
      return parseWithValibot(formData, { schema })
    },
  })

  return (
    <div class="p-4">
      <form
        method="post"
        action="/form"
        {...getFormProps(form)}
        class="grid gap-4"
      >
        <div class="grid gap-1">
          <Label htmlFor={email.id}>Email</Label>
          <Input
            {...getInputProps(email, { type: 'email' })}
            placeholder="Enter your email"
          />
          <div class="text-red-500">{email.errors}</div>
        </div>

        <div class="grid gap-1">
          <Label htmlFor={password.id}>Password</Label>
          <Input
            {...getInputProps(password, { type: 'password' })}
            placeholder="Enter your password"
          />
          <div class="text-red-500">{password.errors}</div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

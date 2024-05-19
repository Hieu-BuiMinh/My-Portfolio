import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ContactModalContent from './contact-modal-content'

interface IContactButton {
	children: React.ReactNode
}

function ContactButton({ children }: Readonly<IContactButton>) {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<div className="flex items-center justify-center" onClick={open}>
				{children}
			</div>

			<Modal opened={opened} withCloseButton={false} centered onClose={close}>
				<ContactModalContent />
			</Modal>
		</>
	)
}

export default ContactButton

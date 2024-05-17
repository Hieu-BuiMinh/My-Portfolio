import { Button, Modal, useComputedColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ContactModalContent from './contact-modal-content'

interface IContactButton {
	children: React.ReactNode
}

function ContactButton({ children }: Readonly<IContactButton>) {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<button onClick={open}>{children}</button>

			<Modal opened={opened} withCloseButton={false} centered onClose={close}>
				<ContactModalContent />
			</Modal>
		</>
	)
}

export default ContactButton

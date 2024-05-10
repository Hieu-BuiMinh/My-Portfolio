import { Button, Modal, useComputedColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ContactModalContent from './contact-modal-content'

function ContactButton() {
	const [opened, { open, close }] = useDisclosure(false)
	const computedColorScheme = useComputedColorScheme('light')

	return (
		<>
			<Button
				onClick={open}
				m={'auto'}
				variant={computedColorScheme === 'light' ? 'filled' : 'outline'}
				size="md"
				radius="xl"
			>
				Say Hi!
			</Button>

			<Modal opened={opened} withCloseButton={false} centered onClose={close} classNames={{ body: '!p-0' }}>
				<ContactModalContent />
			</Modal>
		</>
	)
}

export default ContactButton

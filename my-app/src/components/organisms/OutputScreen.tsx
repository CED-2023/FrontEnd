import {
    Button,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
  } from '@chakra-ui/react'

  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>目的地の表示</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>目的地が決まりました</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Google Mapで開きますか
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                キャンセル
              </Button>
              <Button variant='ghost'>はい</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
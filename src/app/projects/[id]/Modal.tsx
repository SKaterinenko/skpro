"use client"
import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Image from "next/image";

type PropsType = {
    link: string
    shortDescription: string
}
const Modal = ({link, shortDescription}: PropsType) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (<>
            <Image
                alt={shortDescription}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{transform: 'translate3d(0, 0, 0)'}}
                src={link}
                onClick={openModal}
                width={400}
                height={160}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="w-full min-h-full flex items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-8/12 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2 relative aspect-[3/2] max-h-full w-full">
                                        <Image
                                            alt={shortDescription}
                                            className="object-contain"
                                            style={{transform: 'translate3d(0, 0, 0)'}}
                                            src={link}
                                            fill={true}
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal
import React from 'react'
import pdfBook from '../pdfs/test.pdf'

const ReaderPage = () => {
    return (
        <div className="w-full h-screen">
            <embed
                src={pdfBook}
                type="application/pdf"
                width='100%'
                height='100%' />
        </div>
    )
}

export default ReaderPage

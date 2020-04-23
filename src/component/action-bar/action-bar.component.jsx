import React from 'react';
import { Button } from '../button'

const ActionBar = () => {
    // const selectedMonth = moment().format('MMMM YYYY')
    return (
        <div>
            <Button label="Create">
                <span className="remindly-plus"></span>
            </Button>
            <Button label="Today">
                <span className="remindly-calendar"></span>
            </Button>
            <Button label="">
                <span className="remindly-backward"></span>
            </Button>
            <Button label="">
                <span className="remindly-forward"></span>
            </Button>
            {/* <div>{selectedMonth}</div> */}
        </div>
    )
}

export { ActionBar }

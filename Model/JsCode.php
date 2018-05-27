<?php

namespace Fp\JsFormValidatorBundle\Model;

class JsCode
{
    /**
     * @var string
     */
    private $code;

    /**
     * @param string $code
     */
    public function __construct($code)
    {
        $this->code = $code;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->code;
    }
}

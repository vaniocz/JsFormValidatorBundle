<?php
/**
 * Created by PhpStorm.
 * User: Yury Maltsev
 * Email: dev.ymalcev@gmail.com
 * Date: 10/24/13
 * Time: 5:06 PM
 */
namespace Fp\JsFormValidatorBundle\Twig\Extension;

use Symfony\Bundle\FrameworkBundle\Translation\Translator;
use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormView;
use Symfony\Component\Validator\Validator;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Mapping\GetterMetadata;
use Symfony\Component\Validator\Mapping\PropertyMetadata;
use Doctrine\Common\Collections\ArrayCollection;
use Fp\JsFormValidatorBundle\Factory\JsFormValidatorFactory;

class JsFormValidatorTwigExtension extends \Twig_Extension
{
    /**
     * @var JsFormValidatorFactory
     */
    protected $factory;

    /**
     * @param JsFormValidatorFactory $factory
     */
    public function __construct(JsFormValidatorFactory $factory)
    {
        $this->factory = $factory;
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return array(
            'fp_jsfv' => new \Twig_Function_Method($this, 'getJsValidator', ['is_safe' => ['html']]),
        );
    }

    public function getJsValidator(Form $form)
    {
        $this->factory->processForm($form);

        return $this->factory->generateJavascript();
    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'FpJsFormValidator';
    }
}